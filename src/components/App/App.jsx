import './App.css';
import Main from "../Main/Main";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import NotFound from '../NotFound/NotFound';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';

import { useAuth } from '../../hooks/useAuth';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import RequireAuth from '../RequireAuth/RequireAuth';
import api from '../../utils/MainApi';
import moviesApi from '../../utils/MovieApi';
import { LOCATION } from '../../utils/const';
import { defineSavedState } from '../../utils/utils';

function App() {

  const { currentUser, setCurrentUser, handleSignup, handleSignin, checkToken, handleLogout } = useAuth();

  useEffect(() => {

    checkToken();

  }, []);

  function handleUpdateUser(newUserInfo) {
    return api.patchUserInfo(newUserInfo)
      .then(res => {
        setCurrentUser({
          ...currentUser,
          ...res
        });
      })
  }

  function saveMovie(movie) {
    return api.postSavedMovie(movie)
      .then(movie => {

        movie.isSaved = true;

        const savedMoviesJSON = localStorage.getItem(LOCATION.SAVED_MOVIES);
        const savedMovies = !savedMoviesJSON? []: JSON.parse(savedMoviesJSON);
        const newSavedMovies = [...savedMovies, movie];

        localStorage.setItem(LOCATION.SAVED_MOVIES, JSON.stringify(newSavedMovies));

      });
  }

  function unsaveMovie(movie) {
    return api.deleteSavedMovie(movie.movieId || movie.id)
    .then(deletedMovie => {

      const savedMoviesJSON = localStorage.getItem(LOCATION.SAVED_MOVIES);
      const savedMovies = !savedMoviesJSON? []: JSON.parse(savedMoviesJSON);
      const newSavedMovies = savedMovies.filter(movie => ((movie.movieId || movie.id) !== deletedMovie.movieId));

      localStorage.setItem(LOCATION.SAVED_MOVIES, JSON.stringify(newSavedMovies));

    });
  }

  function getSavedMovies() {
    return api.getSavedMovies();
  }

  function getMovies() {
    return Promise.all([moviesApi.getAllMovies(), getSavedMovies()])
      .then(([moviesAll, savedMovies]) => {
        return defineSavedState(moviesAll, savedMovies);
      })
  }

  return (
    <div className="page">

      <CurrentUserContext.Provider value={currentUser}>

        <Header />
        <Routes>
          <Route path={LOCATION.HOME} element={<Main />} />
          <Route path={LOCATION.MOVIES} element={
            <RequireAuth redirectTo={LOCATION.HOME}>
              <Movies
                saveMovie={saveMovie}
                unsaveMovie={unsaveMovie}
                getMovies={getMovies}
              />
            </RequireAuth>
          } />
          <Route path={LOCATION.SAVED_MOVIES} element={
            <RequireAuth redirectTo={LOCATION.HOME}>
              <SavedMovies
                saveMovie={saveMovie}
                unsaveMovie={unsaveMovie}
                getMovies={getSavedMovies}
              />
            </RequireAuth>
          } />
          <Route path={LOCATION.SIGNIN} element={<Login handleSubmit={handleSignin} />} />
          <Route path={LOCATION.SIGNUP} element={<Register handleSubmit={handleSignup} />} />
          <Route path={LOCATION.PROFILE} element={
            <RequireAuth redirectTo={LOCATION.HOME}>
              <Profile handleLogout={handleLogout} handleSubmit={handleUpdateUser} />
            </RequireAuth>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />

      </CurrentUserContext.Provider>

    </div>
  );
}

export default App;

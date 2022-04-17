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
    return api.postSavedMovie(movie);
  }

  function unsaveMovie(movie) {
    return api.deleteSavedMovie(movie.movieId || movie.id);
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
          <Route path="/" element={<Main />} />
          <Route path={LOCATION.MOVIES} element={
            <RequireAuth redirectTo="/">
              <Movies
                saveMovie={saveMovie}
                unsaveMovie={unsaveMovie}
                getMovies={getMovies}
              />
            </RequireAuth>
          } />
          <Route path={LOCATION.SAVED_MOVIES} element={
            <RequireAuth redirectTo="/">
              <SavedMovies
                saveMovie={saveMovie}
                unsaveMovie={unsaveMovie}
                getMovies={getSavedMovies}
              />
            </RequireAuth>
          } />
          <Route path="/signin" element={<Login handleSubmit={handleSignin} />} />
          <Route path="/signup" element={<Register handleSubmit={handleSignup} />} />
          <Route path="/profile" element={
            <RequireAuth redirectTo="/">
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

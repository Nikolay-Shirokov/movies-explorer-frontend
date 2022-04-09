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
import { handleError } from '../../utils/utils';

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

  return (
    <div className="page">

      <CurrentUserContext.Provider value={currentUser}>

        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movies" element={
            <RequireAuth redirectTo="/">
              <Movies />
            </RequireAuth>
          } />
          <Route path="/saved-movies" element={
            <RequireAuth redirectTo="/">
              <SavedMovies />
            </RequireAuth>
          } />
          <Route path="/signin" element={<Login handleSubmit={handleSignin}/>} />
          <Route path="/signup" element={<Register handleSubmit={handleSignup}/>} />
          <Route path="/profile" element={
            <RequireAuth redirectTo="/">
              <Profile handleLogout={handleLogout} handleSubmit={handleUpdateUser}/>
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

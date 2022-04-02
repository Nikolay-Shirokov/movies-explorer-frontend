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

function App() {

  const { currentUser, setCurrentUser, handleSignup, handleSignin, checkToken, handleLogout } = useAuth();

  useEffect(() => {

    checkToken();

  }, []);

  return (
    <div className="page">

      <CurrentUserContext.Provider value={currentUser}>

        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />

      </CurrentUserContext.Provider>

    </div>
  );
}

export default App;

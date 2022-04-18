import { useState } from 'react';
import { useNavigate } from 'react-router';
import { LOCATION } from '../utils/const';
import api from "../utils/MainApi";

export function useAuth() {

  const emptyAuthInfo = {
    loggedIn: false,
  }

  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState(emptyAuthInfo);

  const handleSignup = (userInfo) => {
    return api.signup(userInfo)
      .then(res => {
        handleSignin(userInfo);
      })
  }

  const handleSignin = (userInfo) => {
    return api.signin(userInfo)
      .then(res => {
        setTimeout(handleGetUserInfo, 1000);
      })
  }

  const handleGetUserInfo = () => {
    return api.getUserInfo()
      .then(res => {
        setCurrentUser({
          ...currentUser,
          loggedIn: true,
          ...res,
        });
        navigate(LOCATION.MOVIES)
      })
  }

  const checkToken = () => {
    handleGetUserInfo();
  }

  const handleLogout = () => {
    return api.signout()
      .then(res => {
        setCurrentUser(emptyAuthInfo);
        localStorage.clear();
        navigate(LOCATION.HOME)
      })
  }

  return { currentUser, setCurrentUser, handleSignup, handleSignin, checkToken, handleLogout };
}

import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function RequireAuth({ children, redirectTo }) {

  const currentUser = useContext(CurrentUserContext);
  const { loggedIn } = currentUser;

  return loggedIn ? children : <Navigate to={redirectTo} />;
}

export default RequireAuth;

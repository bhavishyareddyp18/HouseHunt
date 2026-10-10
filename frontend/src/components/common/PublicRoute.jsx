import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { Navigate }
from "react-router-dom";

import useAuth
from "../../hooks/useAuth";

function PublicRoute({

  children

}) {

  const {
    user
  } = useAuth();

  if(user){

    if(
      user.role ===
      "admin"
    ){

      return (
        <Navigate
          to="/admin/dashboard"
        />
      );
    }

    if(
      user.role ===
      "owner"
    ){

      return (
        <Navigate
          to="/owner/dashboard"
        />
      );
    }

    return (
      <Navigate
        to="/user/dashboard"
      />
    );
  }

  return children;
}

export default PublicRoute;
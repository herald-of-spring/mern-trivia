import React from "react";
import Auth from "../utils/Auth";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children}) {
    let auth = Auth.loggedIn();
    return (
      auth
          ? children
          : <Navigate to="/select" />
    );
}

export default PrivateRoute;
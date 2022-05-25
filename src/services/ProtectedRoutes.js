import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children, isLoggedIn }) => {
  console.log(isLoggedIn);

  if (isLoggedIn) {
    return children;
  }
  return <Navigate to="/login" />;
};

export default ProtectedRoutes;

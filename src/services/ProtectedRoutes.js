import React from 'react'
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children,   isLoggedIn }) => {
  
    if (!isLoggedIn) {
      return <Navigate to="/login" />;
    }
  return children
}

export default ProtectedRoutes
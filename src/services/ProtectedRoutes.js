import React from 'react'
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children, user }) => {
    if (!user.user && !user.password) {
        return <Navigate to="/login" />
    }
  return children
}

export default ProtectedRoutes
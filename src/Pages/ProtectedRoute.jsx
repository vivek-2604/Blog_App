import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children}) =>{
    const loginUser = JSON.parse(localStorage.getItem("loginData"));
    return loginUser ? children : <Navigate to="/login"/>
}

export default ProtectedRoute;
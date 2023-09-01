import React from "react";
import { Navigate, Outlet } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const ProtectedRoute = ({ redirectPath="/login", token }) => {
    if(!token) {
        return <Navigate to={redirectPath} replace={true}></Navigate>
    }

    return <Outlet />
}
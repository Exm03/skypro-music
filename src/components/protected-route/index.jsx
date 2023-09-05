import React from "react";
import { Navigate} from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const ProtectedRoute = ({children, redirectPath="/login", isAllowed }) => {
    if(!isAllowed) {
        return <Navigate to={redirectPath} replace={true}></Navigate>
    }

    return children
}
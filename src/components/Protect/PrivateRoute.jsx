import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "../../components/layout/Loading";

const PrivateRoute = ({ children }) => {
    var user = useSelector((state) => state.user.logged);

    // return children;
    return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;

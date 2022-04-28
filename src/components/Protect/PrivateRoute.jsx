import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "../../components/layout/Loading";
//@Render ra một component <Route /> và truyền tất cả các props được truyền vào cho nó.
//@ authenticated user
//@ Check Login ? Render Components : Redirect to Login

const PrivateRoute = ({ children }) => {
    const user = useSelector((state) => state.user.logged);
    const authLoading = useSelector((state) => state.user.authLoading);

    // return children;
    return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;

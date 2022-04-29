import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

const AuthLogin = ({ children }) => {
    const logged = useSelector((state) => state.user.logged);

    return logged ? <Navigate to="/" /> : children;
};

export default AuthLogin;

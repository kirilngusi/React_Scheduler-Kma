import React, { useState, useEffect } from "react";

import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./components/Auth/Login";
import Home from "./components/Home/Home";

import PrivateRoute from "./components/Protect/PrivateRoute";
import AuthLogin from "./components/Protect/AuthLogin";

import NProgress from "nprogress";
import "nprogress/nprogress.css";

const App = () => {
    const location = useLocation();
    useEffect(() => {
        // Runs On Location, I.e. Route, Change
        NProgress.start();
        NProgress.done();
    }, [location]);

    return (
        <React.Fragment>
            <Routes>
                <Route
                    path="/login"
                    element={
                        <AuthLogin>
                            <Login />
                        </AuthLogin>
                    }
                />
                <Route
                    path="/"
                    element={
                        <PrivateRoute>
                            <Home />
                        </PrivateRoute>
                    }
                />
                <Route path="*" element={<p>There's nothing here: 404!</p>} />
            </Routes>
        </React.Fragment>
    );
};

export default App;

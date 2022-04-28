import React, { useState, useEffect } from "react";

import { Routes, Route, Link, Navigate } from "react-router-dom";
import Login from "./components/Auth/Login";
import Home from "./components/Home/Home";

import PrivateRoute from "./components/Protect/PrivateRoute";

const App = () => {
    return (
        <React.Fragment>
            <Routes>
                <Route path="/login" element={<Login />} />
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

import React, { useState, useEffect } from "react";

import { Routes, Route, Link } from "react-router-dom";
import Login from "./components/Auth/Login";
import Home from "./components/Home/Home";
const App = () => {
    return (
        <React.Fragment>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </React.Fragment>
    );
};

export default App;

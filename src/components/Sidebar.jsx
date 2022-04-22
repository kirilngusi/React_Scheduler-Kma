import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <button>
            <Link to="/login">Login</Link>
        </button>
    );
};

export default Sidebar;

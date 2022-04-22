import React from "react";
import { useDispatch } from "react-redux";

import { login, getShedule } from "../../store/reducers/user";
import { Link } from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <div onClick={() => dispatch(login())}>Login</div>
            <div onClick={() => dispatch(getShedule())}>Get</div>
            <button>
                <Link to="/">home</Link>
            </button>
        </div>
    );
};

export default Login;

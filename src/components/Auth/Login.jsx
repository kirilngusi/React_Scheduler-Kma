import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { login } from "../../store/reducers/user";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { authUser } from "../../store/reducers/user";
import Toats from "../layout/Toats";
const Login = () => {
    const dispatch = useDispatch();
    const logged = useSelector((state) => state.user.logged);
    // const [alert, setAlert] = useState(null);
    let error = useSelector((state) => state.user.error);

    const [formLogin, setFromLogin] = useState({
        username: "",
        password: "",
    });
    const { username, password } = formLogin;
    let navigate = useNavigate();

    useEffect(() => {
        dispatch(authUser());
    }, []);

    useEffect(() => {
        if (logged) {
            navigate("/");
        }
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            await dispatch(login(formLogin));

            if (logged) {
                navigate("/");
            }
        } catch (err) {
            console.log(err);
            localStorage.removeItem("token");
        }
    };

    // console.log(alert);

    const onChangeUser = (e) => {
        setFromLogin({ ...formLogin, [e.target.name]: e.target.value });
    };

    return (
        <div className="h-screen">
            {error ? <Toats error={error} /> : ""}
            <div className="w-full flex justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                <div className="max-w-md w-full space-y-8 shadow-md  rounded-lg  ">
                    <h1 className="text-center justify-center flex text-3xl  text-gray-500">
                        Admin Panel
                    </h1>
                    <form
                        onSubmit={handleLogin}
                        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                    >
                        <div className="mb-4">
                            <label
                                className="block text-gray-500 text-lg font-bold mb-2 "
                                htmlFor="username"
                            >
                                {"Tài Khoản"}
                            </label>
                            <input
                                type="text"
                                name="username"
                                placeholder="Username"
                                value={username}
                                onChange={onChangeUser}
                                className="bg-gray-200 focus:bg-transparent focus:border-blue-700 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                className="block text-gray-500 text-lg font-bold mb-2"
                                htmlFor="username"
                            >
                                {"Mật Khẩu"}
                            </label>
                            <input
                                className="bg-gray-200 focus:bg-transparent focus:border-blue-400 appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={password}
                                onChange={onChangeUser}
                            />
                        </div>
                        <div className="flex justify-center items-center">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;

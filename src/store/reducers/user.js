import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "../../utilities/typeContains";
import setAuthToken from "../../utilities/setAuthToken";

export const login = createAsyncThunk("user/login", async () => {
    const headers = {
        "Content-Type": "application/json",
    };

    const formLogin = {
        username: process.env.USERNAME,
        password: process.env.PASSWORD,
    };

    const res = await axios.post(`${apiUrl}/login`, formLogin, { headers });
    return res.data;
});

export const getShedule = createAsyncThunk("user/getShedule", async () => {
    const headers = {
        "Content-Type": "application/json",
    };
    if (localStorage.getItem("token")) {
        setAuthToken(localStorage.getItem("token"));
    }

    const res = await axios.get(`${apiUrl}`, { headers });
    return res;
});

export const slice = createSlice({
    name: "user",
    initialState: {
        logged: false,
        data: {},
        shedule: "",
    },
    reducers: {
        setLogin(state, action) {
            state.logged = true;
            localStorage.setItem("token");
        },
        setLogout(state, action) {
            state.logged = false;
        },
    },
    extraReducers: {
        [login.pending]: (state, action) => {
            console.log("Pending");
        },
        [login.fulfilled]: (state, action) => {
            state.data = action.payload;
            state.logged = true;

            localStorage.setItem("token", action.payload.accessToken);
        },
        [login.rejected]: (state, action) => {
            state.logged = false;
            localStorage.removeItem(token);
        },
        [getShedule.pending]: (state, action) => {
            console.log("Pending getshedule");
        },
        [getShedule.fulfilled]: (state, { payload }) => {
            state.shedule = payload.data.message.schedule;

            localStorage.setItem(
                "data",
                JSON.stringify(payload.data.message.schedule)
            );
        },
        [login.rejected]: (state, action) => {
            console.log("rejected");
        },
    },
});

export const { setLogin } = slice.actions;

// export const selecteShedule = (state) => state.user.shedule;

const userReducer = slice.reducer;
export default userReducer;

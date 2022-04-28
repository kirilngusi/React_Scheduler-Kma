import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";

export const slice = createSlice({
    name: "change",
    initialState: {
        month: dayjs().month(),
        year: dayjs().year(),
    },
    reducers: {
        MonthPre(state, action) {
            state.month -= 1;
        },

        MonthNext(state, action) {
            state.month += 1;
        },

        MonthPresent(state, action) {
            state.month = dayjs().month();
            state.year = dayjs().year();
        },
    },
});

export const { MonthNext, MonthPre, MonthPresent } = slice.actions;

export const selectMonth = (state) => state.changeMonth.month;

const changeMonthReducer = slice.reducer;
export default changeMonthReducer;

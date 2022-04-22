import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";

export const slice = createSlice({
    name: "change",
    initialState: {
        month: dayjs().month(),
    },
    reducers: {
        MonthPre(state, action) {
            state.month -= 1;
        },

        MonthNext(state, action) {
            state.month += 1;
        },
    },
});

export const { MonthNext, MonthPre } = slice.actions;

export const selectMonth = (state) => state.changeMonth.month;

const changeMonthReducer = slice.reducer;
export default changeMonthReducer;

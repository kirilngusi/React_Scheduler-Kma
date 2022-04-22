import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: "changeToolTip",
    initialState: {
        showToolTip: false,
        data: {},
    },
    reducers: {
        changeStatus(state, { payload }) {
            const { lesson } = payload;
            state.showToolTip = !state.showToolTip;

            state.data = lesson;
        },
    },
});

export const { changeStatus } = slice.actions;

export const subLesson = (state) => state.toolTip.data;

const toolTipReducer = slice.reducer;
export default toolTipReducer;

import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: "changeToolTip",
    initialState: {
        showToolTip: false,
        data: [],
    },
    reducers: {
        changeStatus(state, { payload }) {
            const { lesson } = payload;
            state.showToolTip = !state.showToolTip;

            state.data = lesson;
        },
        changeStatusMobile(state, { payload }) {
            const { lesson, show } = payload;
            state.showToolTip = show;

            state.data = lesson;
        },
    },
});

export const { changeStatus, changeStatusMobile } = slice.actions;

export const subLesson = (state) => state.toolTip.data;

const toolTipReducer = slice.reducer;
export default toolTipReducer;

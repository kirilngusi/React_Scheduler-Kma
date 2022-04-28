import { configureStore } from "@reduxjs/toolkit";
import toolTipReducer from "./reducers/changeToolTip";
import changeMonthReducer from "./reducers/changeMonth";
import userReducer from "./reducers/user";
export default configureStore({
    reducer: {
        toolTip: toolTipReducer,
        changeMonth: changeMonthReducer,
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                // Ignore these action types
                ignoredActions: ["user/AuthUser/fulfilled"],
                // Ignore these field paths in all actions
                // ignoredActionPaths: ["user/getShedule"],
                // // Ignore these paths in the state
                // ignoredPaths: ['items.dates'],
            },
        }),
});

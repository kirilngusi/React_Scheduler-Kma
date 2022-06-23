import React, { useContext, useState, createContext } from "react";
import dayjs from "dayjs";
export const ContextWrapper = createContext("");

const ContextWrapperProvider = ({ children }) => {
    const [daySelected, setDaySelected] = useState(dayjs());

    const listData = {
        daySelected,
        setDaySelected,
    };

    return (
        <ContextWrapper.Provider value={listData}>
            {children}
        </ContextWrapper.Provider>
    );
};

export default ContextWrapperProvider;

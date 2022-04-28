import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    MonthPresent,
    MonthNext,
    MonthPre,
} from "../store/reducers/changeMonth";

const CalendarHeader = () => {
    const dispatch = useDispatch();

    const monthSchedule = useSelector((state) => state.changeMonth.month);
    const yearSchedule = useSelector((state) => state.changeMonth.year);

    const onChangeMonthPre = () => {
        dispatch(MonthPre());
    };

    const onChangeMonthNext = () => {
        dispatch(MonthNext());
    };

    return (
        <div>
            <button onClick={() => dispatch(MonthPresent())}>Today</button>
            <button onClick={() => onChangeMonthPre()}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
            <button onClick={() => onChangeMonthNext()}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
            {/* <span>{yearSchedule + "." + `${monthSchedule + 1}`}</span> */}
            <span>{`Tháng ${monthSchedule + 1}` + `Năm ${yearSchedule}`}</span>
        </div>
    );
};

export default CalendarHeader;

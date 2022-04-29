import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    MonthPresent,
    MonthNext,
    MonthPre,
} from "../store/reducers/changeMonth";

import { authUser, setLogout } from "../store/reducers/user";

const CalendarHeader = ({ device }) => {
    const dispatch = useDispatch();

    const monthSchedule = useSelector((state) => state.changeMonth.month);
    const yearSchedule = useSelector((state) => state.changeMonth.year);
    const student_Id = useSelector((state) => state.user.userInfo);

    const onChangeMonthPre = () => {
        dispatch(MonthPre());
    };

    const onChangeMonthNext = () => {
        dispatch(MonthNext());
    };

    const logOutBtn = () => {
        window.location.reload(false);
        dispatch(setLogout());
    };

    if (device == "mobile") {
        return (
            <div className="flex justify-between mb-2">
                {student_Id ? (
                    <>
                        <span className="text-blue font-bold py-2 pl-3">{`Hi ${student_Id} !`}</span>
                        <button
                            onClick={() => logOutBtn()}
                            className="text-white font-medium px-3"
                        >
                            Logout
                        </button>
                    </>
                ) : null}
            </div>
        );
    }

    return (
        <div className="flex items-center">
            <button
                className="bg-sky-500/100 hover:bg-sky-500/70 text-white font-bold py-2 px-4 rounded-full ml-5"
                onClick={() => dispatch(MonthPresent())}
            >
                Today
            </button>
            <button
                onClick={() => onChangeMonthPre()}
                className="  flex items-center "
            >
                <span className="material-icons-outlined cursor-pointer mr-2">
                    chevron_left
                </span>
            </button>
            <button
                onClick={() => onChangeMonthNext()}
                class=" flex items-center"
            >
                <span className="material-icons-outlined cursor-pointer mr-2">
                    chevron_right
                </span>
            </button>
            <div className="flex ">
                <span className="mr-2 w-20 text-center">
                    {`Tháng ${monthSchedule + 1}`}
                </span>
                <span className="w-20">{`Năm ${yearSchedule}`}</span>
            </div>
            <div className="w-full flex justify-end mr-5">
                {student_Id ? (
                    <>
                        <span className="mr-2 py-2">{`Hi ${student_Id} !`}</span>
                        <button
                            onClick={() => logOutBtn()}
                            className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full "
                        >
                            Logout
                        </button>
                    </>
                ) : null}
            </div>
        </div>
    );
};

export default CalendarHeader;

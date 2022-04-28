import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import dayjs from "dayjs";

import DayCalendar from "./DayCalendar";
import ShowLesson from "./ShowLesson";

import {
    MonthPresent,
    MonthNext,
    MonthPre,
} from "../../store/reducers/changeMonth";

const SmallCalendar = ({ month }) => {
    const showEventModal = useSelector((state) => state.toolTip.showToolTip);

    const dispatch = useDispatch();
    const monthSchedule = useSelector((state) => state.changeMonth.month);
    const yearSchedule = useSelector((state) => state.changeMonth.year);

    return (
        <div className="text-sm text-mobile-sm">
            <div className=" h-screen bg-darkslategray pt-5 text-steelblue font-bold ">
                <header className="flex justify-between">
                    <button onClick={() => dispatch(MonthPre())}>
                        <span className="material-icons-outlined cursor-pointer mr-2">
                            chevron_left
                        </span>
                    </button>
                    <p className="text-gray-500 font-bold text-center w-full">
                        {dayjs(new Date(yearSchedule, monthSchedule)).format(
                            "MMMM/YYYY"
                        )}
                    </p>
                    <button onClick={() => dispatch(MonthNext())}>
                        <span className="material-icons-outlined cursor-pointer mr-2">
                            chevron_right
                        </span>
                    </button>
                </header>

                <div className="grid grid-cols-7 grid-row-6 mt-5 ">
                    {month[0].map((day, i) => (
                        <div className="text-center" key={i}>
                            {dayjs(new Date(day.$d)).format("ddd")}
                        </div>
                    ))}
                    {month.map((row, i) => (
                        <React.Fragment key={i}>
                            {row.map((day, idx) => (
                                <DayCalendar day={day} key={idx} rowIdx={i} />
                            ))}
                        </React.Fragment>
                    ))}
                </div>

                <div className="mt-10">
                    {showEventModal ? <ShowLesson /> : ""}
                </div>
            </div>
        </div>
    );
};

export default SmallCalendar;

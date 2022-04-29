import React from "react";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { changeStatusMobile } from "../../store/reducers/changeToolTip";

const DayCalendar = ({ day, rowIdx }) => {
    const dispatch = useDispatch();
    const schedule = localStorage.getItem("data");

    const dayToString = day.$d.toString();

    const getCurrentDay = () => {
        return day.format("DD-MM-YY") == dayjs().format("DD-MM-YY")
            ? "bg-blue-600 rounded-full text-white "
            : "";
    };

    const showEventModal = (dayToString) => {
        if (schedule) {
            let lessons = [];
            JSON.parse(schedule).filter((value) =>
                value.date.split(" ").splice(0, 4).toString() ==
                dayToString.split(" ").splice(0, 4).toString()
                    ? lessons.push(value)
                    : ""
            );

            dispatch(changeStatusMobile({ lesson: lessons, show: true }));
        }
    };

    return (
        <>
            <div
                className={`cursor-pointer  text-center ${getCurrentDay()} p-2 m-2  relative  `}
                onClick={() => showEventModal(day.$d.toString())}
                key={rowIdx}
            >
                <div className="">{day.format("DD")}</div>

                <div className=" ">
                    {schedule ? (
                        JSON.parse(schedule).map((value, index) =>
                            value.date.split(" ").splice(0, 4).toString() ==
                            dayToString.split(" ").splice(0, 4).toString() ? (
                                // <span className="w-10 h-full" key={index}>
                                //     .
                                // </span>
                                <div className="flex justify-center absolute ">
                                    <span className="  h-2 w-2 rounded-full bg-sky-400 opacity-0"></span>
                                    <span className="rounded-full h-2 w-2 bg-sky-500 "></span>
                                </div>
                            ) : (
                                ""
                            )
                        )
                    ) : (
                        <span></span>
                    )}
                </div>
            </div>
        </>
    );
};

export default DayCalendar;

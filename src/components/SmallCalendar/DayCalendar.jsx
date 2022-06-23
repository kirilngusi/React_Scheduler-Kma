import React, { useState, useContext } from "react";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { changeStatusMobile } from "../../store/reducers/changeToolTip";
import { ContextWrapper } from "../../context/ContextWrapper";

const DayCalendar = ({ day, rowIdx }) => {
    // const [activecolor, setActiveColor] = useState(dayjs());
    const { daySelected, setDaySelected } = useContext(ContextWrapper);
    const dispatch = useDispatch();
    const schedule = localStorage.getItem("data");

    const dayToString = day.$d.toString();

    const getCurrentDay = () => {
        // return day.format("DD-MM-YY") == dayjs().format("DD-MM-YY")
        //     ? "bg-blue-600 rounded-full text-white "
        //     : "";
        return;
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

    const getDayClass = (day) => {
        const format = "DD-MM-YY";
        const nowDay = dayjs().format(format);
        const currDay = day.format(format);
        const slcDay = daySelected && daySelected.format(format);
        if (nowDay === currDay) {
            return "bg-blue-500 rounded-full text-white";
        } else if (currDay === slcDay) {
            return "bg-blue-300 rounded-full text-blue-600 font-bold";
        } else {
            return "";
        }
    };

    return (
        <>
            <div
                className={`cursor-pointer  text-center ${getCurrentDay()} p-2  relative h-12 w-12`}
                onClick={() => showEventModal(day.$d.toString())}
                key={rowIdx}
            >
                <div
                    className={`flex justify-center items-center w-full h-full ${getDayClass(
                        day
                    )} relative`}
                    onClick={() => setDaySelected(day)}
                >
                    {day.format("DD")}
                </div>

                <div className="w-full">
                    {schedule ? (
                        JSON.parse(schedule).map((value, index) =>
                            value.date.split(" ").splice(0, 4).toString() ==
                            dayToString.split(" ").splice(0, 4).toString() ? (
                                <div
                                    className="absolute w-8 flex justify-center  items-center "
                                    key={index}
                                >
                                    {/* <span className=" rounded-full bg-sky-400 opacity-0"></span> */}
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

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeStatus } from "../store/reducers/changeToolTip";
import { timeLesson } from "../utilities/getTime";
import dayjs from "dayjs";

const randomColor = [
    "bg-rose-500",
    "bg-sky-400",
    "bg-pink-400",
    "bg-purple-400",
    "bg-violet-600",
    "bg-indigo-400",
    "bg-blue-400",
    "bg-teal-500",
    "bg-lime-500",
    "bg-yellow-500",
    "bg-orange-500",
    "bg-orange-600",
    "bg-red-400",
    "bg-red-50",
    "bg-zinc-500",
    "bg-zinc-400",
];

const makeColor = Math.floor(Math.random() * randomColor.length);

const Day = ({ day, rowIdx }) => {
    var dayToString = day.$d.toString();

    const schedule = localStorage.getItem("data");

    const getCurrentDay = () => {
        return day.format("DD-MM-YY") == dayjs().format("DD-MM-YY")
            ? "bg-blue-600 rounded-full w-7 text-white"
            : "";
    };

    const dispatch = useDispatch();
    const showToolTip = (lesson) => {
        // console.log(lesson);
        dispatch(changeStatus({ lesson }));
    };

    return (
        <div className="border border-gray-200 flex flex-col">
            <header className="flex flex-col items-center">
                {rowIdx === 0 && (
                    <p className="text-sm mt-1">
                        {day.format("ddd").toUpperCase()}
                    </p>
                )}
                <p
                    className={`text-sm p-1 my-1 text-center ${getCurrentDay()} `}
                >
                    {day.format("DD")}
                </p>
            </header>
            <div className="flex-1 cursor-pointer">
                {schedule ? (
                    JSON.parse(schedule).map((value, index) =>
                        value.date.split(" ").splice(0, 4).toString() ==
                        dayToString.split(" ").splice(0, 4).toString() ? (
                            <h1
                                onClick={() => showToolTip(value.lessons)}
                                className={`rounded mb-1 ${randomColor[makeColor]} text-white`}
                                key={index}
                            >
                                {timeLesson(value.lessons[0].lesson).start}
                                {" - "}
                                {timeLesson(value.lessons[0].lesson).end}{" "}
                                {value.lessons[0].subject_name.split("-")[0]}
                            </h1>
                        ) : (
                            ""
                        )
                    )
                ) : (
                    <h1></h1>
                )}
            </div>
        </div>
    );
};

export default Day;

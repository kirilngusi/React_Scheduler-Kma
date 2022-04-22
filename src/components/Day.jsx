import React, { useState, useEffect } from "react";
import data from "../data.json";
import { useDispatch, useSelector } from "react-redux";
import { changeStatus } from "../store/reducers/changeToolTip";
import { timeLesson } from "../utilities/getTime";
// import { selecteShedule } from "../store/reducers/user";
const Day = ({ day, rowIdx }) => {
    var dayToString = day.$d.toString();

    const dispatch = useDispatch();
    const showToolTip = (lesson) => {
        // console.log(lesson);
        dispatch(changeStatus({ lesson }));
    };

    // const schedule = localStorage.getItem("data");
    const schedule = useSelector((state) => state.user.shedule);

    const [data, setData] = useState(schedule);

    useEffect(() => {
        setData(schedule);
    }, [data]);

    useEffect(() => {
        console.log(schedule[0]);
    }, []);

    return (
        <div className="border border-gray-200 flex flex-col">
            <header className="flex flex-col items-center">
                {rowIdx === 0 && (
                    <p className="text-sm mt-1">
                        {day.format("ddd").toUpperCase()}
                    </p>
                )}
                <p className={`text-sm p-1 my-1 text-center `}>
                    {day.format("DD")}
                </p>
            </header>
            <div className="flex-1 cursor-pointer">
                {schedule.map((value) =>
                    value.date.split(" ").splice(0, 4).toString() ==
                    dayToString.split(" ").splice(0, 4).toString() ? (
                        <h1
                            onClick={() => showToolTip(value.lessons)}
                            className="bg-sky-400 rounded mb-1"
                        >
                            {timeLesson(value.lessons[0].lesson).start}
                            {" - "}
                            {timeLesson(value.lessons[0].lesson).end}{" "}
                            {value.lessons[0].subject_name.split("-")[0]}
                        </h1>
                    ) : (
                        ""
                    )
                )}
            </div>
        </div>
    );
};

export default Day;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { subLesson, changeStatus } from "../store/reducers/changeToolTip";
import { timeLesson } from "../utilities/getTime";

const ShowToolTip = React.memo(() => {
    const dispatch = useDispatch();
    const lesson = useSelector(subLesson);

    const hiddenToolTip = () => {
        dispatch(changeStatus({ lesson: "" }));
    };

    return (
        <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
            <div className="text-black space-y-5 text-center relative inline-block align-bottom bg-white rounded-lg p-9 overflow-hidden shadow-xl transform transition-all sm:align-middle sm:max-w-lg sm:w-full">
                <div
                    className="flex justify-end cursor-pointer"
                    onClick={() => hiddenToolTip()}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-black"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                </div>
                <div>
                    <div className="mb-3">{`Môn Học:  ${lesson[0].subject_name}`}</div>
                    <div className="mb-3">{`Thời Gian: Từ ${
                        timeLesson(lesson[0].lesson).start
                    } Đến: ${timeLesson(lesson[0].lesson).end}`}</div>
                    <div className="mb-2">{`Địa Điểm: ${lesson[0].address}`}</div>
                </div>
            </div>
        </div>
    );
});

export default ShowToolTip;

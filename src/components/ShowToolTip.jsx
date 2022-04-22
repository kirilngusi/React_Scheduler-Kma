import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { subLesson, changeStatus } from "../store/reducers/changeToolTip";

const ShowToolTip = () => {
    const dispatch = useDispatch();
    const lesson = useSelector(subLesson);

    const hiddenToolTip = () => {
        dispatch(changeStatus({ lesson: "" }));
    };

    return (
        <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
            <div>
                <div onClick={() => hiddenToolTip()}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
                <div>
                    <div>{lesson[0].subject_name}</div>
                    <div>{lesson[0].lesson}</div>
                    <div>{lesson[0].address}</div>
                </div>
            </div>
        </div>
    );
};

export default ShowToolTip;

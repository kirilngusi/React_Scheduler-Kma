import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    changeStatusMobile,
    subLesson,
} from "../../store/reducers/changeToolTip";

import { timeLesson } from "../../utilities/getTime";

const ShowLesson = React.memo(() => {
    const lessons = useSelector(subLesson);

    if (lessons.length == 0) {
        return "";
    }

    return lessons.map((lesson, index) => (
        <div className="bg-darkslategray w-full h-full">
            <div
                className="shadow-xl rounded-lg mb-5 ml-1 border-0	"
                key={index}
            >
                <div className="mb-2">{`Môn Học:  ${lesson.lessons[0].subject_name}`}</div>
                <div className="mb-2">{`Thời Gian: Từ ${
                    timeLesson(lesson.lessons[0].lesson).start
                } Đến: ${timeLesson(lesson.lessons[0].lesson).end}`}</div>
                <div className="mb-2">{`Địa Điểm: ${lesson.lessons[0].address}`}</div>
            </div>
        </div>
    ));
});

export default ShowLesson;

import dayjs from "dayjs";

export const getMonth = (month = dayjs().month()) => {
    const year = dayjs().year();

    const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();

    //get day old Month
    let currentMonthCount = 0 - firstDayOfTheMonth;
    const daysMatrix = new Array(5).fill([]).map(() => {
        return new Array(7).fill(null).map(() => {
            currentMonthCount++;
            return dayjs(new Date(year, month, currentMonthCount));
        });
    });
    return daysMatrix;
};

export const timeLesson = (lesson) => {
    let time = {
        start: "",
        end: "",
    };
    switch (lesson) {
        case "1,2,3":
            time = {
                start: "7:00",
                end: "9:25",
            };
            break;
        case "4,5,6":
            time = {
                start: "9:35",
                end: "12:00",
            };
            break;
        case "7,8,9":
            time = {
                start: "12:30",
                end: "14:55",
            };
            break;
        case "10,11,12":
            time = {
                start: "15:05",
                end: "17:30",
            };
            break;
        case "13,14,15,16":
            time = {
                start: "18:00",
                end: "21:15",
            };
            break;
        case "7,8,9,10":
            time = {
                start: "12:30",
                end: "15:50",
            };
            break;
    }
    return time;
};

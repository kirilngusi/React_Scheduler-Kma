import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import CalendarHeader from "../CalendarHeader";
import Month from "../../components/Month";
import ShowToolTip from "../../components/ShowToolTip";
import SmallCalendar from "../SmallCalendar/SmallCalendar";
import Loading from "../layout/Loading";

import { selectMonth } from "../../store/reducers/changeMonth";
import { authUser } from "../../store/reducers/user";

import { getMonth } from "../../utilities/getTime";

//mobile
import useWindowDimensions from "../hook/useWindowDimensions";

const Home = () => {
    //mobile
    const { height, width } = useWindowDimensions();

    //web
    const [currenMonth, setCurrentMonth] = useState(getMonth());

    //select
    const index = useSelector(selectMonth);
    const showEventModal = useSelector((state) => state.toolTip.showToolTip);
    const auth = useSelector((state) => state.user.authLoading);

    const dispatch = useDispatch();

    useEffect(() => {
        setCurrentMonth(getMonth(index));
    }, [index]);

    useEffect(() => {
        dispatch(authUser());
    }, []);

    if (!auth) {
        return <Loading />;
    }

    if (width <= 500) {
        return (
            <div>
                <SmallCalendar month={currenMonth} />
            </div>
        );
    }

    return (
        <React.Fragment>
            {showEventModal ? <ShowToolTip /> : ""}
            <div className="h-screen flex flex-col">
                <CalendarHeader />
                <div className="flex flex-1">
                    <Month month={currenMonth} />
                </div>
            </div>
        </React.Fragment>
    );
};

export default Home;

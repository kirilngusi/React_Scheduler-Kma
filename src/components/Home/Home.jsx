import React, { useState, useEffect } from "react";
import Month from "../../components/Month";
import ShowToolTip from "../../components/ShowToolTip";
import CalendarHeader from "../CalendarHeader";
import Sidebar from "../../components/Sidebar";
import { getMonth } from "../../utilities/getTime";

import { useSelector } from "react-redux";
import { selectMonth } from "../../store/reducers/changeMonth";

const Home = () => {
    const [currenMonth, setCurrentMonth] = useState(getMonth());
    const index = useSelector(selectMonth);

    useEffect(() => {
        setCurrentMonth(getMonth(index));
    }, [index]);

    const showEventModal = useSelector((state) => state.toolTip.showToolTip);

    return (
        <React.Fragment>
            {showEventModal ? <ShowToolTip /> : ""}
            <div className="h-screen flex flex-col">
                <CalendarHeader />

                <div className="flex flex-1">
                    <Sidebar />
                    <Month month={currenMonth} />
                </div>
            </div>
        </React.Fragment>
    );
};

export default Home;

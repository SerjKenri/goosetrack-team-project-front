import { CalendarToolbar } from 'pages/CalendarToolbar/CalendarToolbar';

import { Outlet, useLocation } from 'react-router-dom';

const CalendarPage = () => {
    return (
        <>
            <CalendarToolbar />

            {/* <CalendarTable/> */}

            <Outlet />
        </>
    );
};

export default CalendarPage;

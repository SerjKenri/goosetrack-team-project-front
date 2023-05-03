import { CalendarToolbar } from 'pages/CalendarToolbar/CalendarToolbar';

import { Outlet } from 'react-router-dom';

const CalendarPage = () => {
    return (
        <>
            <CalendarToolbar />

            <Outlet />
        </>
    );
};

export default CalendarPage;

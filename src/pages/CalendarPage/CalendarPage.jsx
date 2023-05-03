import { CalendarToolbar } from 'pages/CalendarToolbar/CalendarToolbar';

// import { CalendarTable } from 'components/CalendarTable/CalendarTable';
import { Outlet, useLocation } from 'react-router-dom';

const CalendarPage = () => {
    const date = new Date();
    const location = useLocation();
    location.pathname = `/calendar/month/${date}`;

    return (
        <>
            <CalendarToolbar />

            {/* <CalendarTable/> */}

            <Outlet />
        </>
    );
};

export default CalendarPage;

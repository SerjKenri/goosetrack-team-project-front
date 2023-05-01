import { CalendarToolbar } from "pages/CalendarToolbar/CalendarToolbar";
import { CalendarTable } from "components/CalendarTable/CalendarTable";
import { Outlet } from 'react-router-dom';

const CalendarPage = () => {
    return (
        <>

            <CalendarToolbar/>
            <CalendarTable/>
            <Outlet />
        </>
    );
};

export default CalendarPage;

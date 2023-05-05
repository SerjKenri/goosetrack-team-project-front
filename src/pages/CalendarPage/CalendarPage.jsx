import { Loader } from 'components/Loader/Loader';
import moment from 'moment';
import { CalendarToolbar } from 'pages/CalendarToolbar/CalendarToolbar';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Outlet, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-use';
import { selectIsLoadingTasks, selectTasks } from 'redux/tasks/tasks.selectors';

const CalendarPage = () => {
    const navigate = useNavigate();
    const currentDate = moment().format('YYYY-MM');
    const isLoading = useSelector(selectIsLoadingTasks);
    const tasks = useSelector(selectTasks);
    const { pathname } = useLocation();

    const handleNavigate = useCallback(() => {
        return navigate(`/calendar/month/${currentDate}`);
    }, [navigate, currentDate]);

    useEffect(() => {
        if (pathname.endsWith('calendar')) handleNavigate();
    }, [handleNavigate, pathname]);

    return (
        <>
            
            {isLoading && <Loader />}
            {tasks && <>
                <CalendarToolbar />
                <Outlet />
            </>}
        </>
    );
};

export default CalendarPage;

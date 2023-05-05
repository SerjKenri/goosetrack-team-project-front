import { Loader } from 'components/Loader/Loader';
import moment from 'moment';
import { CalendarToolbar } from 'pages/CalendarToolbar/CalendarToolbar';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import {  Outlet, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-use';
import { selectIsLoadingTasks, selectTasks } from 'redux/tasks/tasks.selectors';

const CalendarPage = () => {

    const navigate = useNavigate()
    const currentDate = moment().format('YYYY-MM')
    const isLoading = useSelector(selectIsLoadingTasks)
    const tasks = useSelector(selectTasks)
    const { pathname }=useLocation()

    useEffect(() => {
        if (pathname.endsWith('calendar'))
        {navigate(`/calendar/month/${currentDate}`) }
        // eslint-disable-next-line no-use-before-define
    }, [pathname])

    return (
        <>
            <CalendarToolbar />
            {isLoading && <Loader />}
            {tasks && <Outlet />}
        </>
    );
};

export default CalendarPage;

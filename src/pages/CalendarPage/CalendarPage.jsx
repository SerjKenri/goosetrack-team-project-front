import { Loader } from 'components/Loader/Loader';
import moment from 'moment';
import { CalendarToolbar } from 'pages/CalendarToolbar/CalendarToolbar';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import {  Outlet, useNavigate } from 'react-router-dom';
import { selectIsLoadingTasks, selectTasks } from 'redux/tasks/tasks.selectors';

const CalendarPage = () => {

    const navigate = useNavigate()
    const currentDate = moment().format('YYYY-MM')
    const isLoading = useSelector(selectIsLoadingTasks)
    const tasks = useSelector(selectTasks)

    useEffect(() => {
        navigate(`/calendar/month/${currentDate}`) 
        // eslint-disable-next-line no-use-before-define
    }, [])

    return (
        <>
            <CalendarToolbar />
            {isLoading && <Loader />}
            {tasks && <Outlet />}
        </>
    );
};

export default CalendarPage;

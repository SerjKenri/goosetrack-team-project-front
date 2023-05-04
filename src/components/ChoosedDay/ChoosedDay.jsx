import TasksColumnsList from 'components/TasksColumnsList/TasksColumnsList';
import { NavLink, useParams } from 'react-router-dom';
import styled from 'styled-components';
import moment from 'moment';
import { selectTasks } from 'redux/tasks/tasks.selectors';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTasks } from 'redux/operations';

export const ChoosedDay = () => {
    const tasks = useSelector(selectTasks);
    const dispatch = useDispatch();
    const { currentDay } = useParams();

    const date = currentDay.slice(8, 10);
    const currentYear = currentDay.slice(0, 4);
    const currentMonth = currentDay.slice(5, 7);
    const chooseDay = moment()
        .month(currentMonth - 1)
        .day(date - 3);

    const chooseWeek = [];
    let day = chooseDay;

    while (day <= chooseDay) {
        for (let i = chooseDay; i < chooseDay + 7; i++) {
            chooseWeek.push(moment(day));
            day = moment(day).add(1, 'day');
        }
    }

    useEffect(() => {
        dispatch(fetchTasks({ year: currentYear, month: currentMonth }));
    }, [currentMonth, currentYear, dispatch]);

    const currentTasks = tasks.filter(task => task.date === currentDay);

    const isMobileView = window.innerWidth < 768;

    return (
        <>
            <CalendarContainer>
                <CalendarWrapper>
                    {chooseWeek.map(day => {
                        return (
                            <CalendarItem key={day.format('DD-MM-YY')}>
                                <CalendarDay>
                                    {isMobileView
                                        ? moment()
                                              .day(day.format('D'))
                                              .format('ddd')
                                              .slice(0, 1)
                                        : moment()
                                              .day(day.format('d'))
                                              .format('ddd')
                                              .toUpperCase()}
                                </CalendarDay>
                                <CalendarLink
                                    to={`/calendar/day/${day.format(
                                        'YYYY-MM-DD'
                                    )}`}
                                >
                                    <CalendarDate>
                                        {day.format('DD')}
                                    </CalendarDate>
                                </CalendarLink>
                            </CalendarItem>
                        );
                    })}
                </CalendarWrapper>
            </CalendarContainer>
            <TasksColumnsList
                currentDate={{ year: currentYear, month: currentMonth }} // u should use date here
                withScrollableColumns
                tasks={currentTasks}
            />
        </>
    );
};

const CalendarContainer = styled.div`
    width: 100%;

    /* padding-top: 12px;
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
*/
    @media screen and (min-width: 768px) {
        width: '1087px';

        /* padding-top: 16px;
        padding-bottom: 32px;
        padding-left: 32px;
        padding-right: 32px; */
    }
`;

const CalendarWrapper = styled.ul`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    justify-content: space-between;
    background: #ffffff;
    border: 1px solid rgba(220, 227, 229, 0.5);
    border-radius: 8px;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 1.17;
    padding: 10px 0;
`;
const CalendarItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const CalendarLink = styled(NavLink)`
    text-decoration: none;
    &.active {
        border-radius: 6px;
        background-color: blue;
        color: white;
    }
`;

const CalendarDay = styled.div`
    font-weight: 600;
    font-size: 14px;
    line-height: 1.286;
    color: #616161;
    text-align: center;
    font-weight: 600;
    font-size: 16px;
    line-height: 1.125;
    /* text-transform: uppercase; */
    margin-bottom: 4px;
`;

const CalendarDate = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 27px;
    height: 27px;
`;

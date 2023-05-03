import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import moment from 'moment';

export const CalendarTable = ({ startDay, today, tasks }) => {
    let day = moment(startDay).startOf('month').startOf('isoweek');
    const endWeek = moment().endOf('month').endOf('isoweek');

    const calendarDays = [];

    while (day <= endWeek) {
        for (let i = 0; i < 7; i++) {
            calendarDays.push(moment(day));
            day = moment(day).add(1, 'day');
        }
    }

    const currentDay = day => {
        return moment().isSame(day, 'day');
    };

    const isSelectedMonth = month => {
        const today = moment();
        return today.isSame(month, 'month');
    };

    const isMobileView = window.innerWidth < 768;

    return (
        <CalendarContainer>
            <DayList>
                {[...Array(7)].map((_, idx) => (
                    <DayItem key={idx}>
                        <CalendarDay>
                            {isMobileView
                                ? moment()
                                      .day(idx + 1)
                                      .format('ddd')
                                      .slice(0, 1)
                                : moment()
                                      .day(idx + 1)
                                      .format('ddd')
                                      .toUpperCase()}
                        </CalendarDay>
                    </DayItem>
                ))}
            </DayList>
            <CalendarWrapper>
                {calendarDays.map(day => {
                    // console.log(tasks);
                    const dayTasks = tasks.filter(
                        task => task.date === day.format('YYYY-MM-DD')
                    );
                    // console.log(dayTasks, day.format('YYYY-MM-DD'));
                    return (
                        <CalendarLink
                            to={`/calendar/day/${day.format('YYYY-MM-DD')}`}
                            key={day.format('DD-MM-YY')}
                        >
                            <CalendarCell
                                isSelectedMonth={isSelectedMonth(day)}
                            >
                                <CalendarDate currentDay={currentDay(day)}>
                                    {day.format('D')}
                                </CalendarDate>
                                <DayTasks>
                                    {dayTasks !== [] ? (
                                        dayTasks.map(dayTask => (
                                            <p>{dayTask.title}</p>
                                        ))
                                    ) : (
                                        <p></p>
                                    )}
                                </DayTasks>
                            </CalendarCell>
                        </CalendarLink>
                    );
                })}
            </CalendarWrapper>
        </CalendarContainer>
    );
};

const CalendarContainer = styled.div`
    width: 100%;
    padding-top: 12px;
    padding-bottom: 5px;
    padding-left: 20px;
    padding-right: 20px;

    @media screen and (min-width: 768px) {
        padding-top: 16px 32px 32px;
        padding-bottom: 32px;
        padding-left: 32px;
        padding-right: 32px;
    }
`;

const DayList = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 15px;
    padding: 14px 0;
    border: 1px solid rgba(220, 227, 229, 0.8);
    border-radius: 8px;
    font-weight: 600;
    font-size: 14px;
    line-height: 1.286;
    color: #616161;
`;

const DayItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    color: #616161;

    &:nth-child(n + 6) {
        color: #3e85f3;
    }
`;

const CalendarWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);

    background: #ffffff;
    border: 1px solid rgba(220, 227, 229, 0.8);
    border-radius: 8px;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 1.17;
    text-transform: uppercase;
`;

const CalendarLink = styled(NavLink)`
    text-decoration: none;
`;

const CalendarDay = styled.div`
    text-align: center;
    font-weight: 600;
    font-size: 16px;
    line-height: 1.125;
    text-transform: uppercase;
`;
const DayTasks = styled.div`
    text-align: center;
    font-weight: 600;
    font-size: 6px;
    line-height: 1.125;
    text-transform: uppercase;
`;
const CalendarCell = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    min-width: 100%;
    min-height: 94px;
    text-align: right;
    padding: 12px;
    border: 1px solid rgba(220, 227, 229, 0.8);
`;

const CalendarDate = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;
    color: ${({ currentDay }) => (currentDay ? 'white' : 'black')};
    border-radius: ${({ currentDay }) => (currentDay ? '6px' : 'none')};
    background-color: ${({ currentDay }) =>
        currentDay ? 'blue' : 'transparent'};
`;

export const TaskList = styled.ul`
    display: flex;
    flex-direction: column;
    margin: 0;
    list-style-position: inside;
    padding-left: 4px;
    gap: 2px;
`;

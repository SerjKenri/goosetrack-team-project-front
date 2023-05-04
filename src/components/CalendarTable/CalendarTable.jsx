import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import moment from 'moment';

export const CalendarTable = ({ startDay, today, tasks }) => {
    let calendarDay = moment(startDay).startOf('month');
    let endWeek = moment(startDay).endOf('month');
    const calendarDays = [];

    while (calendarDay <= endWeek) {
        for (let i = 0; i < 7; i++) {
            calendarDays.push(moment(calendarDay));
            calendarDay = moment(calendarDay).add(1, 'day');
        }
    }

    const currentDay = calendarDay => {
        return moment().isSame(calendarDay, 'day');
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
            <CalendarWrapper as={'ul'}>
                {calendarDays.map(calendarDay => {
                    const dayTasks = tasks.filter(
                        task => task.date === calendarDay.format('YYYY-MM-DD')
                    );
                    const oneTask = dayTasks[0];
                    return (
                        <li key={calendarDay.format('DD-MM-YY')}>
                            <CalendarLink
                                to={`/calendar/day/${calendarDay.format(
                                    'YYYY-MM-DD'
                                )}`}
                            >
                                <CalendarCell
                                    isSelectedMonth={isSelectedMonth(
                                        calendarDay
                                    )}
                                >
                                    <CalendarDate
                                        currentDay={currentDay(calendarDay)}
                                    >
                                        {calendarDay.format('D')}
                                    </CalendarDate>
                                    <DayTasks>
                                        {oneTask !== undefined && (
                                            <DayTask
                                                priority={oneTask.priority}
                                            >
                                                {oneTask.title.length <= 12
                                                    ? oneTask.title
                                                    : oneTask.title.slice(
                                                          0,
                                                          9
                                                      ) + '...'}
                                            </DayTask>
                                        )}
                                    </DayTasks>
                                </CalendarCell>
                            </CalendarLink>
                        </li>
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
        width: 1087px;

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
`;

const CalendarLink = styled(NavLink)`
    text-decoration: none;
`;

const CalendarDay = styled.div`
    display: flex;

    text-align: center;
    font-weight: 600;
    font-size: 16px;
    line-height: 1.125;
`;
const DayTasks = styled.div`
    margin-top: 18px;
`;

const DayTask = styled.p(({ priority, theme }) => ({
    display: 'flex',
    fontWeight: '700',
    fontSize: '14px',
    lineHeight: '1.3',
    borderRadius: '8px',
    // maxWidth: '100%',
    padding: '4px 10px',
    backgroundColor:
        priority === 'high'
            ? theme.color.priorityHighColor
            : priority === 'low'
            ? theme.color.priorityLowColor
            : theme.color.priorityMedColor,
    color:
        priority === 'high'
            ? theme.color.taskHighColor
            : priority === 'low'
            ? theme.color.taskLowColor
            : theme.color.taskMedColor,
}));

const CalendarCell = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 100%;
    min-height: 94px;

    padding: 8px;

    border: 1px solid rgba(220, 227, 229, 0.8);
`;

const CalendarDate = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    width: 22px;
    height: 22px;
    color: ${({ currentDay }) => (currentDay ? 'white' : 'black')};
    border-radius: ${({ currentDay }) => (currentDay ? '6px' : 'none')};
    background-color: ${({ currentDay }) =>
        currentDay ? 'blue' : 'transparent'};
`;

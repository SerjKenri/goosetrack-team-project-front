import { useState } from 'react';

const { StyledCalendar, StyledDatePicker } = require('./styledCalendar.styled');

export const Calendar = () => {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <StyledCalendar>
            <StyledDatePicker
                selected={startDate}
                onChange={date => setStartDate(date)}
            />
        </StyledCalendar>
    );
};

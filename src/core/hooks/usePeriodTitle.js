import moment from 'moment';
import { useMemo } from 'react';
import propTypes from 'prop-types';

const dateFormat = {
    month: 'month',
    week: 'week',
    day: 'day',
};

const formatString = {
    [dateFormat.month]: 'MMMM YYYY',
    [dateFormat.week]: 'DD MMMM YYYY',
    [dateFormat.day]: 'DD MMMM YYYY',
};

const usePeriodTitle = (periodType, date) => {
    const formattedDate = useMemo(() => moment.utc(date), [date]);

    const period = useMemo(() => {
        const formatter = formatString[periodType];
        if (!formatter) return;

        if (periodType === dateFormat.month || periodType === dateFormat.week) {
            const startOfWeek = formattedDate.weekday(1);
            const endOfWeek = formattedDate.weekday(7);
            const startOfMonth = formattedDate.startOf('month');
            const endOfMonth = formattedDate.endOf('month');

            const startDate =
                periodType === dateFormat.month ? startOfMonth : startOfWeek;
            const endDate =
                periodType === dateFormat.month ? endOfMonth : endOfWeek;

            const isSameMonth = startDate.isSame(endDate, 'month');
            const format = isSameMonth ? 'DD - ' : 'DD MMMM - ';
            return `${startDate.format(format)}${endDate.format(formatter)}`;
        } else {
            return formattedDate.format(formatter);
        }
    }, [formattedDate, periodType]);

    return period;
};

usePeriodTitle.propTypes = {
    periodType: propTypes.oneOf(Object.values(dateFormat)).isRequired,
    date: propTypes.string.isRequired,
};

export { usePeriodTitle };

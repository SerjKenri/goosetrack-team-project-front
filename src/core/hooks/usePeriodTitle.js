import moment from 'moment';
import { useMemo } from 'react';
import propTypes from 'prop-types';

export const dateFormat = {
    month: 'month',
    week: 'week',
    day: 'day',
};

const usePeriodTitle = (periodType, date) => {
    const period = useMemo(() => {
        switch (periodType) {
            case dateFormat.month:
                return moment(date).utc().format('MMMM YYYY');
            case dateFormat.week:
                const [firstDayYear, firstDayMonth, firstDayDate] = moment(date)
                    .utc()
                    .weekday(1)
                    .format('YYYY-MMMM-DD')
                    .split('-');
                const [lastDayYear, lastDayMonth, lastDayDate] = moment(date)
                    .utc()
                    .weekday(7)
                    .format('YYYY-MMMM-DD')
                    .split('-');

                return firstDayYear !== lastDayYear ||
                    firstDayMonth !== lastDayMonth
                    ? `${firstDayDate} ${firstDayMonth} ${firstDayYear} - ${lastDayDate} ${lastDayMonth} ${lastDayYear}`
                    : `${firstDayDate} - ${lastDayDate} ${lastDayMonth} ${firstDayYear}`;
            case dateFormat.day:
                return moment(date).format('DD MMMM YYYY');
            default:
                return;
        }
    }, [periodType, date]);

    return period;
};

usePeriodTitle.propTypes = {
    periodType: propTypes.oneOf(Object.values(dateFormat)).isRequired,
    date: propTypes.string.isRequired,
};

export { usePeriodTitle };

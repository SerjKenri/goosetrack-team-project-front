import moment from 'moment';

const dateFormat = {
    month: 'month',
    week: 'week',
    day: 'day',
};

const toPrevDate = (date, periodType) => {
    return periodType === dateFormat.month
        ? moment(date).subtract(1, 'months').format('YYYY-MM-DD')
        : periodType === dateFormat.week
        ? moment(date).subtract(1, 'weeks').format('YYYY-MM-DD')
        : moment(date).subtract(1, 'days').format('YYYY-MM-DD');
};

const toNextDate = (date, periodType) => {
    return periodType === dateFormat.month
        ? moment(date).add(1, 'months').format('YYYY-MM-DD')
        : periodType === dateFormat.week
        ? moment(date).add(1, 'weeks').format('YYYY-MM-DD')
        : moment(date).add(1, 'days').format('YYYY-MM-DD');
};

export { toPrevDate, toNextDate };

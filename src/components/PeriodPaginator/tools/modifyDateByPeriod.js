import moment from 'moment';

const dateFormat = {
    month: 'month',
    week: 'week',
    day: 'day',
};

const intervalMap = {
    [dateFormat.month]: 'months',
    [dateFormat.week]: 'weeks',
    [dateFormat.day]: 'day',
};

const dateFormatString = 'YYYY-MM-DD';

const toPrevDate = (date, periodType) => {
    const interval = intervalMap[periodType] || 'day';
    const newDate = moment(date).subtract(1, interval);
    return newDate.format(dateFormatString);
};

const toNextDate = (date, periodType) => {
    const interval = intervalMap[periodType] || 'day';
    const newDate = moment(date).add(1, interval);
    return newDate.format(dateFormatString);
};

export { toPrevDate, toNextDate };

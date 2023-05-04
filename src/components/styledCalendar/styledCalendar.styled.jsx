import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const StyledDatePicker = styled(DatePicker)`
    width: 100%;
    padding: 12px 14px;
    margin-bottom: 2px;

    font-weight: 700;
    font-size: 14px;
    line-height: 1.3;
    color: #111111;
    background-color: inherit;
    border: 1px solid rgba(17, 17, 17, 0.1);
    border-radius: 8px;
`;

export const StyledCalendar = styled.div`
    .react-datepicker {
        max-width: 327px;
        height: 100%;

        border-radius: 16px;
        border-color: rgba(62, 133, 243, 1);
        font-family: inherit;
        font-size: 14px;
        line-height: 1.3;
        color: #ffffff;
        background-color: rgba(62, 133, 243, 1);
    }

    .react-datepicker__triangle {
        &::before,
        &::after {
            content: none;
            display: none;
        }
    }

    .react-datepicker__header {
        position: relative;
        padding-bottom: 4px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        background-color: rgba(62, 133, 243, 1);
    }

    .react-datepicker__navigation {
        top: 20px;
    }

    .react-datepicker__navigation-icon {
        &::before {
            border-color: #ffffff;
        }
    }

    .react-datepicker__current-month {
        margin-bottom: 0;
        text-align: center;

        font-weight: 600;
        font-size: 18px;
        line-height: 1.2;
        color: #ffffff;
    }

    .react-datepicker__day-names {
        display: flex;
        justify-content: space-between;
        margin-top: 8px;
        margin-bottom: 0;
    }

    .react-datepicker__day-name {
        color: #ffffff;
        font-size: 12px;
        text-align: center;
        text-transform: uppercase;
        width: 36px;
    }

    .react-datepicker__header__dropdown {
        margin-top: 10px;
    }

    .react-datepicker__month-dropdown,
    .react-datepicker__year-dropdown {
        margin-top: 12px;
        background-color: rgba(62, 133, 243, 1);
        color: #ffffff;
    }
    .react-datepicker__month-option,
    .react-datepicker__year-option {
        &:hover {
            background-color: rgba(255, 255, 255, 0.4);
            color: rgba(62, 133, 243, 1);
        }
    }

    .react-datepicker__month-read-view--down-arrow,
    .react-datepicker__year-read-view--down-arrow {
        border-color: #ffffff;
    }

    .react-datepicker__month-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 8px;
        margin-bottom: 12px;
    }

    .react-datepicker__day {
        width: 2.3rem;
        height: 2.3rem;
        line-height: 2.3rem;
        text-align: center;
        margin: 2px;
        border-radius: 50%;
        font-weight: 400;
        font-size: 12px;
        color: #ffffff;

        &:hover {
            border-radius: 50%;
            background-color: #ffffff;
            color: rgba(62, 133, 243, 1);
        }
    }

    .react-datepicker__day--selected,
    .react-datepicker__day--keyboard-selected,
    .react-datepicker__day--weekend.react-datepicker__day--selected,
    .react-datepicker__day--weekend.react-datepicker__day--keyboard-selected {
        background-color: #ffffff;
        color: rgba(62, 133, 243, 1);
    }

    .react-datepicker__day--weekend {
        color: rgba(255, 255, 255, 0.2);
    }

    .react-datepicker__day--outside-month {
        visibility: hidden;
    }

    .react-datepicker__day--disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;

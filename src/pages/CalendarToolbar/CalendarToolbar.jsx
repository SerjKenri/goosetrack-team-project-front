import styled from 'styled-components';
import { PeriodPaginator } from 'components/PeriodPaginator/PeriodPaginator';
import { PeriodTypeSelect } from 'components/PeriodTypeSelect/PeriodTypeSelect';

export const CalendarToolbar = ({ handlePrevPeriod, handleNextPeriod }) => {
    return (
        <ToolbarWrap>
            <PeriodPaginator />
            <PeriodTypeSelect />
        </ToolbarWrap>
    );
};

export const ToolbarWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    align-items: flex-start;
    /* padding-left: 20px; */
    gap: 18px;
    /* width: 600px; */

    @media screen and (min-width: 768px) {
        /* width: 1087px; */
        flex-direction: row;
        justify-content: space-between;
        /* margin-top: 64px; */
        /* padding-left: 32px; */
        /* padding-right: 32px; */
    }
`;

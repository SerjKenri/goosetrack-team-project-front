import styled from "styled-components";
import { PeriodPaginator } from "components/PeriodPaginator/PeriodPaginator";
import { PeriodTypeSelect } from "components/PeriodTypeSelect/PeriodTypeSelect";

export const CalendarToolbar = ({handlePrevPeriod, handleNextPeriod }) => {
    return (
        <ToolbarWrap>
            <PeriodPaginator
                handlePrevPeriod={handlePrevPeriod}
                handleNextPeriod={handleNextPeriod}
            />
            <PeriodTypeSelect />
        </ToolbarWrap>
    );
};

export const ToolbarWrap = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    margin-bottom: 14px;
    align-items: flex-start;
    padding-left:20px;
    gap:18px;
        

    @media screen and (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        margin-top:64px;
        padding-left:32px;
        padding-right:32px;
    }
`;

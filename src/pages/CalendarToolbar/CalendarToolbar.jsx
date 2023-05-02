import styled from 'styled-components';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { PeriodPaginator } from 'components/PeriodPaginator/PeriodPaginator';
import { PeriodTypeSelect } from 'components/PeriodTypeSelect/PeriodTypeSelect';
import { usePeriodModule } from 'core/hooks/usePeriodModule';

export const CalendarToolbar = ({ handlePrevPeriod, handleNextPeriod }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const periodType = usePeriodModule();

    const { curDate } = useParams();
    console.log(curDate);
    const setDate = date => {
        const pathnameArr = location.pathname.split('/');
        pathnameArr[pathnameArr.length - 1] = date;

        navigate({ pathname: pathnameArr.join('/') });
    };
    return (
        <ToolbarWrap>
            <PeriodPaginator
                periodType={periodType}
                date={curDate}
                setDate={setDate}
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
    padding-left: 20px;
    gap: 18px;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        margin-top: 64px;
        padding-left: 32px;
        padding-right: 32px;
    }
`;

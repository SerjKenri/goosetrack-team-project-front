import { Icon } from 'core/kit/Icon';
import { iconNames } from 'assets/icons/iconNames';
import styled from 'styled-components';
// import { usePeriodTitle } from 'core/hooks/usePeriodTitle';
// import { toPrevDate, toNextDate } from './tools/modifyDateByPeriod';
import { useState } from 'react';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const PeriodPaginator = () => {
    const navigate = useNavigate();
    const { currentDate, currentDay } = useParams();

    let params = window.location.pathname.split('/');
    let param = params[3];

    const changeUseParams = param === 'month' ? currentDate : currentDay;

    const [today, setToday] = useState(moment(changeUseParams));

    // const periodTitle = usePeriodTitle(periodType, date);

    // const firstWeek = today.clone().startOf('isoWeek');

    const day = today.clone().subtract(1, `${param}`);
    const daysInWeek = 7;
    const totalDays = [...Array(daysInWeek)].map(() =>
        day.add(1, 'day').clone()
    );

    const changePeriod = param === 'month' ? 'MMMM YYYY' : 'DD MMMM YYYY';
    const changeNavigatePeriod = param === 'month' ? 'YYYY-MM' : 'YYYY-MM-DD';

    const monthName = moment(changeUseParams).format(`${changePeriod}`);
    // today.clone().subtract(1, 'day');
    // today.clone().add(1, 'day');

    const handlePrev = () => {
        const prev = today.clone().subtract(1, `${param}`);

        setToday(prev);
        navigate(
            `/calendar/${param}/${prev.format(`${changeNavigatePeriod}`)}`
        );
    };

    const handleNext = () => {
        const next = today.clone().add(1, `${param}`);

        setToday(next);
        navigate(
            `/calendar/${param}/${next.format(`${changeNavigatePeriod}`)}`
        );
    };

    const firstDay = totalDays.slice(0, 1);
    const TwoDay = totalDays.slice(1, 2);

    return (
        <RootWrapper>
            <DateParagraph>{monthName}</DateParagraph>
            <BtnWrapper>
                {firstDay.map(i => {
                    // console.log(today);
                    return (
                        <PrevBtn key={i} onClick={handlePrev}>
                            <Icon name={iconNames.chevronLeft} size="18" />
                        </PrevBtn>
                    );
                })}
                {TwoDay.map(i => {
                    // console.log(today);
                    return (
                        <NextBtn key={i} onClick={handleNext}>
                            <Icon name={iconNames.chevronRight} size="18" />
                        </NextBtn>
                    );
                })}
            </BtnWrapper>
        </RootWrapper>
    );
};

export { PeriodPaginator };

const RootWrapper = styled.div(({ theme }) => ({
    display: 'flex',
    minWidth: '215px',
    columnGap: '8px',
}));

const DateParagraph = styled.p(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '8px 12px',
    backgroundColor: '#3E85F3',
    borderRadius: '8px',
    fontWeight: '700',
    fontSize: '16px',
    lineHeight: '18px',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#FFFFFF',
}));

const BtnWrapper = styled.div(({ theme }) => ({
    display: 'flex',
    width: '76px',
    height: '34px',
}));

const PrevBtn = styled.button(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: theme.color.mainBackgroundColor,
    border: '1px solid #dce3e5cc',
    height: '100%',
    borderTopLeftRadius: '8px',
    borderBottomLeftRadius: '8px',
    cursor: 'pointer',
}));

const NextBtn = styled.button(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: theme.color.mainBackgroundColor,
    border: '1px solid #dce3e5cc',
    height: '100%',
    borderTopRightRadius: '8px',
    borderBottomRightRadius: '8px',
    borderLeft: 'none',
    cursor: 'pointer',
}));

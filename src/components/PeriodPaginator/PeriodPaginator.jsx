import propTypes from 'prop-types';
import { Icon } from 'core/kit/Icon';
import { iconNames } from 'assets/icons/iconNames';
import styled from 'styled-components';
import { usePeriodTitle } from 'core/hooks/usePeriodTitle';
import { toPrevDate, toNextDate } from './tools/modifyDateByPeriod';

const PeriodPaginator = ({ periodType, date, setDate }) => {
    const periodTitle = usePeriodTitle(periodType, date);

    const handlePrevPeriod = () => {
        const prevPeriodDate = toPrevDate(date, periodType);
        setDate(prevPeriodDate);
    };

    const handleNextPeriod = () => {
        const nextPeriodDate = toNextDate(date, periodType);
        setDate(nextPeriodDate);
    };

    return (
        <RootWrapper>
            <DateParagraph>{periodTitle}</DateParagraph>
            <BtnWrapper>
                <PrevBtn onClick={handlePrevPeriod}>
                    <Icon name={iconNames.chevronLeft} size="18" />
                </PrevBtn>
                <NextBtn onClick={handleNextPeriod}>
                    <Icon name={iconNames.chevronRight} size="18" />
                </NextBtn>
            </BtnWrapper>
        </RootWrapper>
    );
};

PeriodPaginator.propTypes = {
    periodType: propTypes.oneOf(['day', 'week', 'month', 'year']).isRequired,
    date: propTypes.instanceOf(Date).isRequired,
    setDate: propTypes.func.isRequired,
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

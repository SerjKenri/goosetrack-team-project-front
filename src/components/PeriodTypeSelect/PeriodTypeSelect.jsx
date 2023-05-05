import { NavLink, useParams } from 'react-router-dom';
import styled from 'styled-components';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
export const PeriodTypeSelect = () => {
    const { t } = useTranslation();
    const periodParams = useParams();
    const [period] = Object.values(periodParams);

    return (
        <PeriodTypeSelectWrap>
            <PeriodTypeSelectBtn
                to={`/calendar/month/${moment(period).format('YYYY-MM')}`}
            >
                {t('calendarPage.toggleButton.month')}
            </PeriodTypeSelectBtn>
            <PeriodTypeSelectBtn
                to={`/calendar/day/${moment(period).format('YYYY-MM-DD')}`}
                style={{ borderRadius: '0px 8px 8px 0px' }}
            >
                {t('calendarPage.toggleButton.day')}
            </PeriodTypeSelectBtn>
        </PeriodTypeSelectWrap>
    );
};

const PeriodTypeSelectWrap = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const PeriodTypeSelectBtn = styled(NavLink)(({ theme }) => ({
    '&.active': {
        backgroundColor: '#CAE8FF',
    },
    width: '76px',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '8px 0px 0px 8px',

    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '1.28',
    color: theme.color.accentTextColor,
    backgroundColor: theme.color.activeSelectionColor,
    textAlign: 'center',
    cursor: 'pointer',

    '&:not(:last-child)': {
        borderRight: '1px solid rgba(62, 133, 243, 0.2)',
    },

    '&:hover': {
        backgroundColor: '#CAE8FF',
    },

    '&:focus': {
        backgroundColor: '#CAE8FF',
    },

    [theme.media.up(`${theme.breakpoints.m}px`)]: {
        width: '82px',
        fontSize: '16px',
        lineHeight: '1.12',
    },
}));

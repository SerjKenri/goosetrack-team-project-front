import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import moment from 'moment';

export const PeriodTypeSelect = () => {
    const navigate = useNavigate();
    return (
        <PeriodTypeSelectWrap>
            <PeriodTypeSelectBtn
                type="button"
                onClick={() => navigate("/calendar/month/")}
            >
                Month
            </PeriodTypeSelectBtn>
            <PeriodTypeSelectBtn
                type="button"
                onClick={() => navigate(`/calendar/day/${moment().format('YYYY-MM-DD')}`)}
                style={{borderRadius: '0px 8px 8px 0px'}}
            >
                Day
            </PeriodTypeSelectBtn>
        </PeriodTypeSelectWrap>
    );
};

const PeriodTypeSelectWrap = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const PeriodTypeSelectBtn = styled.button(({ theme }) => ({
    width:'76px',
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
        width:'82px',
        fontSize:'16px',
        lineHeight:'1.12',
    },
}));
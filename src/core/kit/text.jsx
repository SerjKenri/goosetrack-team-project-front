import styled from 'styled-components';

export const TextH1 = styled.h1(({ theme }) => ({
    fontSize: '32px',
    lineHeight: '1',
    fontWeight: '700',
    fontFamily: theme.font.mainFont,
    color: theme.color.mainTextColor,
}));

export const MainTitle = styled.h2(({ theme }) => ({
    fontSize: '24px',
    lineHeight: '1',
    fontWeight: '400    ',
    fontFamily: theme.font.secondaryFont,
    color: theme.color.accentTextColor,
}));

export const TextH2 = styled.h2(({ theme }) => ({
    fontSize: '24px',
    lineHeight: '1',
    fontWeight: '600',
    fontFamily: theme.font.mainFont,
    color: theme.color.accentTextColor,
}));

export const TextH3 = styled.h3(({ theme }) => ({
    fontSize: '18px',
    lineHeight: '1',
    fontWeight: '700',
    fontFamily: theme.font.mainFont,
    color: theme.color.calendarDateColor,
}));

export const TextBold = styled.p(({ theme }) => ({
    fontSize: '16px',
    lineHeight: '1.125',
    fontWeight: '600',
    fontFamily: theme.font.mainFont,
    color: theme.color.mainTextColor,
}));

export const Text = styled.p(({ theme }) => ({
    fontSize: '14px',
    lineHeight: '1.3',
    fontWeight: '400',
    fontFamily: theme.font.mainFont,
    color: theme.color.mainTextColor,
}));

export const primaryButton = styled.p(({ theme, disabled }) => ({
    fontSize: '18px',
    lineHeight: '1.3',
    fontWeight: '600',
    fontFamily: theme.font.mainFont,
    letterSpacing: '-0.02em',
    margin: '0 11px 0 0',
    padding: 0,
    color: disabled
        ? theme.color.inactiveBtnTextColor
        : theme.color.btnTextColor,
}));

export const secondaryButton = styled.p(({ theme, disabled }) => ({
    fontSize: '14px',
    lineHeight: '1.3',
    fontWeight: '600',
    fontFamily: theme.font.mainFont,
    margin: ' 0 0  0 8px',
    padding: 0,
    color: disabled
        ? theme.color.inactiveBtnTextColor
        : theme.color.btnTextColor,
}));

export const cancelButton = styled.p(({ theme, disabled }) => ({
    fontSize: '14px',
    lineHeight: '1.3',
    fontWeight: '600',
    fontFamily: theme.font.mainFont,
    padding: 0,
    color: disabled
        ? theme.color.inactiveBtnTextColor
        : theme.color.mainTextColor,
}));
export const addTaskButton = styled.p(({ theme, disabled }) => ({
    fontSize: '14px',
    lineHeight: '1.3',
    fontWeight: '600',
    fontFamily: theme.font.mainFont,
    margin: ' 0 0  0 8px',
    padding: 0,
    color: disabled
        ? theme.color.inactiveBtnTextColor
        : theme.color.mainTextColor,
}));

export const NavLink = styled.p(({ theme }) => ({
    fontSize: '16px',
    lineHeight: '1.19',
    fontWeight: '600',
    fontFamily: theme.font.mainFont,
    color: theme.color.inactiveBtnTextColor,
}));

export const AuthFormTitle = styled.p(({ theme }) => ({
    fontSize: '14px',
    lineHeight: '1.2',
    fontWeight: '600',
    fontFamily: theme.font.mainFont,
    color: theme.color.mainTextColor,
}));

export const UserInfoText = styled.p(({ theme }) => ({
    fontSize: '14px',
    lineHeight: '1.3',
    fontWeight: '700',
    fontFamily: theme.font.mainFont,
    color: theme.color.calendarDateColor,
}));

export const AuthFormTitleMobile = styled.p(({ theme }) => ({
    fontSize: '12px',
    lineHeight: '1.25',
    fontWeight: '600',
    fontFamily: theme.font.mainFont,
    marginBottom:"10px",

    [theme.media.up(`${theme.breakpoints.l}px`)]: {
        fontSize: '18px',
        lineHeight: '1.33',
    },
}));

export const MainDate = styled.h3(({ theme }) => ({
    fontSize: '16px',
    lineHeight: '1.125',
    fontWeight: '700',
    fontFamily: theme.font.mainFont,
    color: theme.color.btnTextColor,
}));

export const PeriodTitle = styled.h3(({ theme }) => ({
    fontSize: '16px',
    lineHeight: '1.125',
    fontWeight: '500',
    fontFamily: theme.font.mainFont,
    color: theme.color.accentTextColor,
}));

export const TodoColumn = styled.h3(({ theme }) => ({
    fontSize: '20px',
    lineHeight: '1.2',
    fontWeight: '700',
    fontFamily: theme.font.mainFont,
    color: theme.color.mainTextColor,
}));

export const TodoTitle = styled.h3(({ theme }) => ({
    fontSize: '14px',
    lineHeight: '1.3',
    fontWeight: '500',
    fontFamily: theme.font.mainFont,
    color: theme.color.mainTextColor,
}));

export const Chip = styled.p(({ theme }) => ({
    fontSize: '10px',
    lineHeight: '1.2',
    fontWeight: '600',
    fontFamily: theme.font.mainFont,
    color: theme.color.outletBackgroundColor,
}));
export const PopupChip = styled.p(({ theme }) => ({
    fontSize: '12px',
    lineHeight: '1.16',
    fontWeight: '600',
    fontFamily: theme.font.mainFont,
    color: theme.color.inputFieldTextColor,
}));

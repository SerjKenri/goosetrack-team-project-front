import styled from 'styled-components';

export const TextH1 = styled.h1(({ theme }) => ({
    fontSize: '32px',
    lineHeight: '1',
    fontWeight: '700',
    fontFamaly: theme.font.mainFont,
    color: theme.color.mainTextColor,
}));

export const MainTitle = styled.h2(({ theme }) => ({
    fontSize: '24px',
    lineHeight: '1',
    fontWeight: '400    ',
    fontFamaly: theme.font.secondaryFont,
    color: theme.color.accentTextColor,
}));

export const TextH2 = styled.h2(({ theme }) => ({
    fontSize: '24px',
    lineHeight: '1',
    fontWeight: '600',
    fontFamaly: theme.font.mainFont,
    color: theme.color.accentTextColor,
}));

export const TextH3 = styled.h3(({ theme }) => ({
    fontSize: '18px',
    lineHeight: '1',
    fontWeight: '700',
    fontFamaly: theme.font.mainFont,
    color: theme.color.calendarDateColor,
}));

export const TextBold = styled.p(({ theme }) => ({
    fontSize: '16px',
    lineHeight: '1.125',
    fontWeight: '600',
    fontFamaly: theme.font.mainFont,
    color: theme.color.mainTextColor,
}));

export const Text = styled.p(({ theme }) => ({
    fontSize: '14px',
    lineHeight: '1.3',
    fontWeight: '400',
    fontFamaly: theme.font.mainFont,
    color: theme.color.mainTextColor,
}));

export const TextButton = styled.p(({ theme }) => ({
    fontSize: '14px',
    lineHeight: '1.3',
    fontWeight: '600',
    fontFamaly: theme.font.mainFont,
    color: theme.color.mainTextColor,
}));

export const AuthButton = styled.p(({ theme }) => ({
    fontSize: '18px',
    lineHeight: '1.3',
    fontWeight: '600',
    fontFamaly: theme.font.mainFont,
    color: theme.color.btnTextColor,
}));

export const NavLink = styled.p(({ theme }) => ({
    fontSize: '16px',
    lineHeight: '1.19',
    fontWeight: '600',
    fontFamaly: theme.font.mainFont,
    color: theme.color.inactiveBtnTextColor,
}));

export const AuthFormTitle = styled.p(({ theme }) => ({
    fontSize: '14px',
    lineHeight: '1.2',
    fontWeight: '600',
    fontFamaly: theme.font.mainFont,
    color: theme.color.mainTextColor,
}));

export const UserInfoText = styled.p(({ theme }) => ({
    fontSize: '14px',
    lineHeight: '1.3',
    fontWeight: '700',
    fontFamaly: theme.font.mainFont,
    color: theme.color.calendarDateColor,
}));

export const AuthFormTitleMobile = styled.p(({ theme }) => ({
    fontSize: '12px',
    lineHeight: '1.25',
    fontWeight: '600',
    fontFamaly: theme.font.mainFont,
    color: theme.color.navTitleColor,
}));

export const MainDate = styled.h3(({ theme }) => ({
    fontSize: '16px',
    lineHeight: '1.125',
    fontWeight: '700',
    fontFamaly: theme.font.mainFont,
    color: theme.color.btnTextColor,
}));

export const PeriodTitle = styled.h3(({ theme }) => ({
    fontSize: '16px',
    lineHeight: '1.125',
    fontWeight: '500',
    fontFamaly: theme.font.mainFont,
    color: theme.color.accentTextColor,
}));

export const TodoColumn = styled.h3(({ theme }) => ({
    fontSize: '20px',
    lineHeight: '1.2',
    fontWeight: '700',
    fontFamaly: theme.font.mainFont,
    color: theme.color.mainTextColor,
}));

export const TodoTitle = styled.h3(({ theme }) => ({
    fontSize: '14px',
    lineHeight: '1.3',
    fontWeight: '500',
    fontFamaly: theme.font.mainFont,
    color: theme.color.mainTextColor,
}));

export const Chip = styled.p(({ theme }) => ({
    fontSize: '10px',
    lineHeight: '1.2',
    fontWeight: '600',
    fontFamaly: theme.font.mainFont,
    color: theme.color.outletBackgroundColor,
}));
export const PopupChip = styled.p(({ theme }) => ({
    fontSize: '12px',
    lineHeight: '1.16',
    fontWeight: '600',
    fontFamaly: theme.font.mainFont,
    color: theme.color.inputFieldTextColor,
}));

import { iconNames } from 'assets/icons/iconNames';
import styled from 'styled-components';
import { Icon } from 'core/kit/Icon';
import gooseimg from 'assets/images/goose-motivate@2x.png';
import { UserInfo } from 'components/UserInfo/UserInfo';
import { ThemeToggler } from 'components/ThemeToggler/ThemeToggler';
import { useLocation, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LangaguesBar } from 'components/LangaguesBar/LangaguesBar';
import { useSelector } from 'react-redux';
import { selectTasks } from 'redux/tasks/tasks.selectors';

export const Header = ({ onClick }) => {
    const location = useLocation();
    const { t } = useTranslation();

    const tasks = useSelector(selectTasks);

        const { currentDay } = useParams();


    const title =
        location.pathname === '/account'
            ? `${t('header.pageTitleFirst')}`
            : `${t('header.pageTitleSecond')}`;
    
    let todayTasks = []

    if (currentDay) todayTasks = tasks.filter((task) => task.date === currentDay)

    const motivation = (currentDay && todayTasks.length > 0) ? true : false


    return (
        <Container>
            <SideBarButton type="button" onClick={onClick}>
                <Icon name={iconNames.burgerMenu} size={'100%'} />
            </SideBarButton>
            <LeftContainer>
                <Image src={gooseimg} alt="goose-motivate" />
                <TextContainer>
                    <Title>{title}</Title>
                    {motivation && <Text>
                        <StyledText>{t('header.motivateFirst')}</StyledText>
                        {t('header.motivateSecond')}
                    </Text>}
                </TextContainer>
            </LeftContainer>
            <RightContainer>
                <LangaguesBar />
                <ThemeToggler />
                <UserInfo />
            </RightContainer>
        </Container>
    );
};

const LeftContainer = styled.div(({ theme }) => ({
    display: 'flex',
    gap: '8px',

    [theme.media.down(`${theme.breakpoints.l}px`)]: {
        display: 'none',
    },
}));

const Image = styled.img(({ theme }) => ({
    width: '64px',
}));

const TextContainer = styled.div(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
}));

const Title = styled.p(({ theme }) => ({
    font: theme.font.mainFont,
    fontSize: '32px',
    lineHeight: '32px',
    fontWeight: '700',
    color: theme.color.mainTextColor,
}));

const Text = styled.p(({ theme }) => ({
    font: theme.font.secondaryFont,
    fontSize: '14px',
    lineHeight: '18px',
    color: theme.color.mainTextColor,
    fontWeight: '600',
}));

const RightContainer = styled.div(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
}));

const StyledText = styled.span(({ theme }) => ({
    color: theme.color.accentTextColor,
}));

const SideBarButton = styled.button(({ theme }) => ({
    backgroundColor: 'transparent',
    padding: '0',
    border: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '24px',
    height: '24px',
    color: theme.color.calendarDateColor,
    cursor: 'pointer',

    '&:hover': {
        color: theme.color.hoverColor,
    },

    [theme.media.up(`${theme.breakpoints.m}px`)]: {
        width: '34px',
        height: '34px',
    },
    [theme.media.up(`${theme.breakpoints.l}px`)]: {
        display: 'none',
    },
}));

const Container = styled.div(({ theme }) => ({
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
}));

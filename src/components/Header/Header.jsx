import { iconNames } from "assets/icons/iconNames";
import styled from 'styled-components';
import { Icon } from 'core/kit/Icon';
import gooseimg from 'assets/images/goose-motivate@2x.png';
import {UserInfo} from 'components/UserInfo/UserInfo'
import { ThemeToggler } from "components/ThemeToggler/ThemeToggler";


export const Header = ({onClick}) => {

    return <Container>
        <SideBarButton type='button' onClick={onClick}>
                <Icon name={iconNames.burgerMenu} size={ '100%' } />
        </SideBarButton>
        <LeftContainer>
            <Image src={gooseimg} alt="goose-motivate"/>
            <TextContainer>
                <Title>TITLE</Title>
                <Text><StyledText>Let go</StyledText> of the past and focus on the present!</Text>
            </TextContainer>
        </LeftContainer>
        <RightContainer>
            <ThemeToggler/>
            <UserInfo/>
        </RightContainer>
    </Container>
}

const LeftContainer = styled.div(({ theme }) => ({
    display: 'flex',
    gap: '8px', 

    [theme.media.down(`${theme.breakpoints.l}px`)]: {
        display: 'none'
    },
}))

const Image = styled.img(({ theme }) => ({
    width: '64px'
}))

const TextContainer = styled.div(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '8px', 
}))

const Title = styled.p(({ theme }) => ({
    font: theme.font.mainFont,
    fontSize: '32px', 
    lineHeight: '32px', 
    fontWeight: '700',
    color: theme.color.mainTextColor,
}))

const Text = styled.p(({ theme }) => ({
    font: theme.font.secondaryFont,
    fontSize: '14px', 
    lineHeight: '18px', 
    color: theme.color.mainTextColor,
    fontWeight: '600',
}))

const RightContainer = styled.div(({ theme }) => ({
    display: 'flex',
    gap: '16px',
}))

const StyledText = styled.span(({ theme }) => ({
    color: theme.color.accentTextColor,
}))

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
        color: 'red'
    },

    [theme.media.up(`${theme.breakpoints.m}px`)]: {
        width: '34px',
        height: '34px',

    },
    [theme.media.up(`${theme.breakpoints.l}px`)]: {
        display: 'none'
    },
}))

const Container = styled.div(({ theme }) => ({
    width: '100%',
    display: "flex",
    justifyContent: 'space-between',
}));




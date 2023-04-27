import { LogOutButton } from 'components/LogoutBtn/LogOutButton';
import { iconNames } from "assets/icons/iconNames";
import styled from 'styled-components';
import { Icon } from 'core/kit/Icon';
import gooseimg from '../../assets/images/goose-sidebar@2x.png'
import { UserNav } from 'components/UserNav/UserNav';


export const SideBar = ({onClick, user}) => {

    return <Container>
        <SecondaryContainer>
            <SideBarHeader>
                <Logo>
                    <Image src={gooseimg} alt="goose"/>
                    <Title>G<Italic>oo</Italic>seTrack</Title>
                </Logo>
                <CloseButton type='button' onClick={onClick}>
                    <Icon name={iconNames.cross} size={ '100%' } />
                </CloseButton>
            </SideBarHeader>
            <UserPanelContainer>
                <SecondaryTitle>User Panel</SecondaryTitle>
                <UserNav />
            </UserPanelContainer>
        </SecondaryContainer>
        <LogOutButton user={ user } />
    </Container>
}

const Container = styled.div(({ theme }) => ({
    height: '100vw',
    display: "flex",
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '24px 20px', 
    backgroundColor: theme.color.mainBackgroundColor,
    position: 'absolute',

    [theme.media.up(`${theme.breakpoints.m}px`)]: {
        padding: '24px 32px'
    },

    [theme.media.up(`${theme.breakpoints.l}px`)]: {
        padding: '32px 24px',
        position: 'relative',
    },
}));

const SecondaryContainer = styled.div(({ theme }) => ({
    display: "flex",
    flexDirection: 'column',
    gap: "64px", 

    [theme.media.up(`${theme.breakpoints.m}px`)]: {
        gap: "50px",
    },

    [theme.media.up(`${theme.breakpoints.l}px`)]: {
        gap: "32px",
    },
}))

const SideBarHeader = styled.div(({ theme }) => ({
    display: "flex",
    width: "max-content",
    justifyContent: 'space-between',
    alignItems: 'center'
}));

const Logo = styled.div(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '6px', 
    
    [theme.media.up(`${theme.breakpoints.l}px`)]: {
        gap: '10px'
    },
}))

const Image = styled.img(({ theme }) => ({
    width: '36px',

    [theme.media.up(`${theme.breakpoints.m}px`)]: {
       width: '60px'
    },

    [theme.media.up(`${theme.breakpoints.l}px`)]: {
        width: '71px'
    },
    
}))

const Title = styled.p(({ theme }) => ({
    font: theme.font.secondaryFont,
    fontSize: '16px', 
    lineHeight: '22px', 
    color: theme.color.accentTextColor,
    fontWeight: '600',
    textShadow: '0px 47px 355px rgba(0, 0, 0, 0.07), 0px 9.4px 57.6875px rgba(0, 0, 0, 0.035)',

    [theme.media.up(`${theme.breakpoints.m}px`)]: {
        fontSize: '18px', 
        lineHeight: '24px', 
    },

    [theme.media.up(`${theme.breakpoints.l}px`)]: {
        fontSize: '24px', 
    },
}))

const Italic = styled.span(({ theme }) => ({
    fontStyle: 'italic'
}))

const CloseButton = styled.button(({ theme }) => ({
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

    [theme.media.up(`${theme.breakpoints.m}px`)]: {
        width: '33px',
        height: '33px'
    },

    [theme.media.up(`${theme.breakpoints.l}px`)]: {
        display: 'none'
    },

    '&:hover': {
        color: 'red'
    },
}))

const UserPanelContainer = styled.div(({ theme }) => ({
    display: "flex",
    flexDirection: 'column',
    gap: "24px",
    
    [theme.media.up(`${theme.breakpoints.m}px`)]: {
        gap: "32px",
    },
}))

const SecondaryTitle = styled.p(({ theme }) => ({
    color: theme.color.inactiveBtnTextColor,
    fontSize: "12px",
    lineHeight: '15px',
    fontWeight: '600',


    [theme.media.up(`${theme.breakpoints.m}px`)]: {
        fontSize: "14px",
        lineHeight: '17px',
    }
}))






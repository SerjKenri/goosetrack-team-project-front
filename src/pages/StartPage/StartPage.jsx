import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import gooseimg from '../../assets/images/goose-sidebar@2x.png';
import ImageCalendar1 from '../../assets/images/startPage/Calendar1.jpg';
import ImageCalendar2 from '../../assets/images/startPage/Calendar2.jpg';
import ImageCalendar3 from '../../assets/images/startPage/Calendar3.jpg';
import ImageNavigationDark from '../../assets/images/startPage/NavigationDark.jpg';
import ImageNavigationLite from '../../assets/images/startPage/NavigationLite.jpg';
import ImageDay from '../../assets/images/startPage/Day.jpg';

import { Icon } from 'core/kit/Icon';

const StartPage = () => {
    const { t } = useTranslation();
    return (
        <Container>
            <Hero>
                <LogoImg src={`${gooseimg}`} />
                <Title>
                    G
                    <span style={{ fontStyle: 'italic', marginRight: '7px' }}>
                        oo
                    </span>
                    seTrack
                </Title>
                <LinkBox>
                    <LoginLink to="/login">
                        <LoginTxt>{t('startPage.login')}</LoginTxt>
                        <Icon name="loginIcon" size="13.5px" />
                    </LoginLink>
                    <SignupLink to="/register">
                        {t('startPage.signUp')}
                    </SignupLink>
                </LinkBox>
            </Hero>

            <ContentList>
                <ContentItem>
                    <ContentBox>
                        <Number>1.</Number>
                        <Category>{t('startPage.calendarView.title')}</Category>
                        <SubTitle>
                            {t('startPage.calendarView.subTitle')}
                        </SubTitle>
                        <Txt>{t('startPage.calendarView.description')}</Txt>
                    </ContentBox>
                    <ImageBox>
                        <ImageEllipse className="calendar" />
                        <Images className="calendarOne" src={ImageCalendar1} />
                        <Images className="calendarTwo" src={ImageCalendar2} />
                        <Images
                            className="calendarThree"
                            src={ImageCalendar3}
                        />
                    </ImageBox>
                </ContentItem>
                <ContentItem>
                    <ContentBox>
                        <Number>2.</Number>
                        <SubTitle>{t('startPage.sidebar.title')}</SubTitle>
                        <Txt>{t('startPage.sidebar.description')}</Txt>
                    </ContentBox>
                    <ImageBox>
                        <ImageEllipse className="sidebar" />
                        <Images
                            className="navigationdark"
                            src={ImageNavigationDark}
                        />
                        <Images
                            className="navigationlite"
                            src={ImageNavigationLite}
                        />
                    </ImageBox>
                </ContentItem>
                <ContentItem>
                    <ContentBox>
                        <Number>3.</Number>
                        <Category>{t('startPage.allInOne.title')}</Category>
                        <SubTitle>{t('startPage.allInOne.one')}</SubTitle>
                        <Txt>{t('startPage.allInOne.description')}</Txt>
                    </ContentBox>
                    <ImageBox>
                        <ImageEllipse className="day" />
                        <Images className="day" src={ImageDay} />
                    </ImageBox>
                </ContentItem>
            </ContentList>
        </Container>
    );
};

export { StartPage };

const Container = styled.div(({ theme }) => ({
    margin: '0 auto',
    backgroundColor: theme.color.mainBackgroundColor,
    maxWidth: '1600px',
}));

const Hero = styled.div(({ theme }) => ({
    textAlign: 'center',
    minHeight: '812px',
    padding: '232px 0 88px',
    backgroundColor: theme.color.accentBackgroundColor,
    color: theme.color.btnTextColor,
    [theme.media.between(
        `${theme.breakpoints.m}px`,
        `${theme.breakpoints.l}px`
    )]: {
        minHeight: '1024px',
        padding: '320px 0',
    },
    [theme.media.up(`${theme.breakpoints.l}px`)]: {
        minHeight: '770px',
        padding: '187px 0',
    },
}));

const LogoImg = styled.img(({ theme }) => ({
    margin: '0 auto',
    width: '142px',
    height: '142px',
    [theme.media.between(`${theme.breakpoints.m}px`)]: {
        width: '150px',
        height: '149px',
    },
}));

const Title = styled.h1(({ theme }) => ({
    marginBottom: '32px',
    fontFamily: 'Coolvetica',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '40px',
    lineHeight: '48px',
    textShadow: `0px 47px 355px rgba(0, 0, 0, 0.07),
        0px 9.4px 57.6875px rgba(0, 0, 0, 0.035)`,
    [theme.media.up(`${theme.breakpoints.m}px`)]: {
        marginBottom: '40px',
        fontSize: '120px',
        lineHeight: '150px',
    },
}));

export const LinkBox = styled.div(({ theme }) => ({
    [theme.media.up(`${theme.breakpoints.m}px`)]: {
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        alignItems: 'center',
    },
}));
export const LoginLink = styled(NavLink)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto 208px',
    width: '131px',
    padding: '14px 32px',
    borderRadius: '16px',
    boxShadow: '4px 2px 16px rgba(136, 165, 191, 0.48)',
    backgroundColor: theme.color.strPgBackgroundColor,
    color: theme.color.accentTextColor,
    [theme.media.up(`${theme.breakpoints.m}px`)]: {
        margin: '0',
        marginLeft: '24px',
    },
}));

export const LoginTxt = styled.span(({ theme }) => ({
    marginRight: '6px',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '14px',
    lineHeight: '18px',
    letterSpacing: '-0.02em',
}));

export const SignupLink = styled(NavLink)(({ theme }) => ({
    fontWeight: '600',
    fontSize: '12px',
    lineHeight: '14px',
    textDecorationLine: 'underline',
    textShadow: `0px 47px 355px rgba(0, 0, 0, 0.07),
        0px 9.4px 57.6875px rgba(0, 0, 0, 0.035)`,
    color: theme.color.btnTextColor,
    [theme.media.up(`${theme.breakpoints.m}px`)]: {
        fontSize: '14px',
        lineHeight: '18px',
    },
}));

export const ContentList = styled.ul(({ theme }) => ({
    padding: '64px 20px',
    [theme.media.up(`${theme.breakpoints.m}px`)]: {
        padding: '64px 32px',
    },
    [theme.media.up(`${theme.breakpoints.l}px`)]: {
        padding: '64px 128px',
    },
}));

export const ContentItem = styled.li(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: '64px',
    '&:last-child': {
        paddingBottom: '0',
    },
    '&:nth-child(2n)': {
        alignItems: 'end',
    },
    [theme.media.up(`${theme.breakpoints.l}px`)]: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        '&:nth-child(2n)': {
            flexDirection: 'row-reverse',
            alignItems: 'center',
        },
    },
}));

export const ContentBox = styled.div(({ theme }) => ({
    maxWidth: '275px',
    [theme.media.up(`${theme.breakpoints.l}px`)]: {
        margin: '0 77px',
    },
}));

export const Number = styled.p(({ theme }) => ({
    marginBottom: '14px',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '80px',
    lineHeight: '100%',
    letterSpacing: '-4px',
    color: theme.color.accentTextColor,
    [theme.media.up(`${theme.breakpoints.m}px`)]: {
        fontSize: '104px',
    },
}));

export const Category = styled.h2(({ theme }) => ({
    display: 'inline-block',
    padding: '8px 18px',
    marginBottom: '8px',
    color: theme.color.accentTextColor,
    background: theme.color.authBackgroundColor,
    borderRadius: '44px',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '32px',
    lineHeight: '40px',
    textTransform: 'uppercase',
    [theme.media.up(`${theme.breakpoints.m}px`)]: {
        padding: '6px 18px',
        fontSize: '40px',
        lineHeight: '44px',
    },
}));

export const SubTitle = styled.h2(({ theme }) => ({
    marginBottom: '14px',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '32px',
    lineHeight: '40px',
    textTransform: 'uppercase',
    [theme.media.up(`${theme.breakpoints.m}px`)]: {
        marginBottom: '24px',
        fontSize: '40px',
        lineHeight: '44px',
    },
}));

export const Txt = styled.p(({ theme }) => ({ theme }) => ({
    paddingBottom: '40px',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '18px',
    color: 'rgba(17, 17, 17, 0.9)',
    [theme.media.up(`${theme.breakpoints.m}px`)]: {
        paddingBottom: '48px',
    },
    [theme.media.up(`${theme.breakpoints.l}px`)]: {
        paddingBottom: '0',
    },
}));

export const ImageBox = styled.div(({ theme }) => ({
    position: 'relative',
    width: '100%',
    height: '457px',
    overflow: 'hidden',
    background: theme.color.activeSelectionColor,
    borderRadius: '40px',
    [theme.media.up(`${theme.breakpoints.m}px`)]: {
        height: '700px',
        borderRadius: '100px',
    },
    [theme.media.up(`${theme.breakpoints.l}px`)]: {
        width: '50%',
    },
}));

export const Images = styled.img(({ theme }) => ({
    position: 'absolute',
    borderRadius: '8px',
    '&.calendarOne': {
        width: '251.75px',
        height: '196.76px',
        left: '34px',
        top: '100px',
        boxShadow: '-17px 36px 45px rgba(0, 0, 0, 0.2)',
        transform: 'rotate(-28deg)',
    },
    [theme.media.up(`${theme.breakpoints.m}px`)]: {
        width: '457.33px',
        height: '357.44px',
        left: '80px',
        top: '160px',
    },
    '&.calendarTwo': {
        width: '254px',
        height: '199px',
        left: '204px',
        top: '100px',
        boxShadow: `0px 27.8704px 43.9236px rgba(0, 0, 0, 0.197407),
            0px 16.563px 23.8889px rgba(0, 0, 0, 0.157926),
            0px 8.6px 12.1875px rgba(0, 0, 0, 0.13),
            0px 3.5037px 6.11111px rgba(0, 0, 0, 0.102074),
            0px 43px 75px rgba(0, 0, 0, 0.26),
            0px 0.796296px 2.95139px rgba(0, 0, 0, 0.0625926)`,
        transform: 'rotate(-28deg)',
    },
    [theme.media.up(`${theme.breakpoints.m}px`)]: {
        width: '463.21px',
        height: '362.34px',
        left: '380px',
        top: '160px',
    },
    '&.calendarThree': {
        width: '105.12px',
        height: '99.73px',
        left: '130px',
        top: '270px',
        boxShadow: `0px 3.5037px 6.11111px rgba(0, 0, 0, 0.102074),
            0px 43px 75px rgba(0, 0, 0, 0.26),
            0px 0.796296px 2.95139px rgba(0, 0, 0, 0.0625926)`,
        transform: 'rotate(-28deg)',
        [theme.media.up(`${theme.breakpoints.m}px`)]: {
            width: '190.96px',
            height: '181.17px',
            left: '255px',
            top: '485px',
        },
    },
    '&.navigationdark': {
        width: '111.24px',
        height: '347.61px',
        left: '-9px',
        top: '130px',
        boxShadow: '-17px 36px 45px rgba(0, 0, 0, 0.2)',
        transform: 'rotate(28deg)',
        [theme.media.up(`${theme.breakpoints.m}px`)]: {
            width: '199px',
            height: '626px',
            left: '80px',
            top: '122px',
        },
        [theme.media.up(`${theme.breakpoints.l}px`)]: {
            width: '191px',
            height: '599px',
            left: '20px',
            top: '150px',
        },
    },
    '&.navigationlite': {
        width: '111.24px',
        height: '347.61px',
        left: '130px',
        top: '130px',
        boxShadow: '-17px 36px 45px rgba(0, 0, 0, 0.2)',
        borderRadius: '8px',
        transform: 'rotate(28deg)',
        [theme.media.up(`${theme.breakpoints.m}px`)]: {
            width: '199px',
            height: '626px',
            left: '330px',
            top: '122px',
        },
        [theme.media.up(`${theme.breakpoints.l}px`)]: {
            width: '191px',
            height: '599px',
            left: '260px',
            top: '150px',
        },
    },
    '&.day': {
        width: '496px',
        height: '310px',
        left: '59px',
        top: '102px',
        padding: '11px',
        borderRadius: '8px',
        border: '1.5px solid rgba(62, 133, 243, 0.4)',
        [theme.media.up(`${theme.breakpoints.m}px`)]: {
            width: '851px',
            height: '532px',
            left: '84px',
            top: '84px',
        },
    },
}));

export const ImageEllipse = styled.div(({ theme }) => ({
    position: 'absolute',
    width: '256px',
    height: '256px',
    borderRadius: '50%',
    backgroundImage: `radial-gradient(
        circle at center,
        rgba(62, 133, 243, 0) 40%,
        rgba(62, 133, 243, 0.1) 40%
    )`,
    [theme.media.up(`${theme.breakpoints.m}px`)]: {
        width: '617px',
        height: '617px',
    },
    '&.calendar': {
        left: '190px',
        top: '330px',
        [theme.media.up(`${theme.breakpoints.m}px`)]: {
            left: '300px',
            top: '515px',
        },
    },
    '&.sidebar': {
        left: ' -115px',
        top: '-100px',
        [theme.media.up(`${theme.breakpoints.m}px`)]: {
            left: '-330px',
            top: '-350px,',
        },
    },
    '&.day': {
        display: 'none',
    },
}));

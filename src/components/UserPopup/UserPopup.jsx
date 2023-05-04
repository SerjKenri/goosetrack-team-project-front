import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import {
    selectUserAvatar,
    selectUserName,
    selectTokenState,
} from 'redux/auth/auth.selectors';
import { UserInfoText } from 'core/kit/text';
import { Avatar } from 'core/kit/Avatar';
import { useMatchMedia } from 'core/hooks/useMatchMedia';
import { iconNames } from 'assets/icons/iconNames';
import { Icon } from 'core/kit/Icon';
import { logoutUser } from 'redux/operations';
import { ButtonDifference } from 'core/kit/Button';
import { Button } from 'core/kit/Button';

export const UserPopup = ({ isOpen, setIsOpen }) => {
    const dispatch = useDispatch();
    const { isMobile } = useMatchMedia();
    const { t } = useTranslation();

    const token = useSelector(selectTokenState);
    const avatar = useSelector(selectUserAvatar);
    const username = useSelector(selectUserName) || '';

    const mainLetter = username.substring(0, 1);

    const handleLogout = () => {
        dispatch(logoutUser());
    };

    return (
        <>
            <Backdrop
                onClick={() => setIsOpen(false)}
                isOpen={isOpen}
            ></Backdrop>
            <PopupWrapper>
                <UserInfoContainer>
                    <Avatar
                        size={isMobile ? '38px' : '44px'}
                        username={mainLetter}
                        avatar={avatar}
                    />
                    <UserNameText isMobile={isMobile}>{username}</UserNameText>
                </UserInfoContainer>
                <LinkWrapper isMobile={isMobile}>
                    <NavLinkStyled to="/account">
                        <IconWrapper>
                            <Icon name={iconNames.user} size={'100%'} />
                        </IconWrapper>
                        {t('sidebar.userNav.myAcc')}
                    </NavLinkStyled>
                </LinkWrapper>
                <LogoutButton
                    type="button"
                    differentStyles={ButtonDifference.primary}
                    title={t('sidebar.logout')}
                    onClick={handleLogout}
                    iconName={iconNames.logout}
                    iconSize="16px"
                    disabled={token ? false : true}
                />
            </PopupWrapper>
        </>
    );
};
const Backdrop = styled.div(({ isOpen }) => ({
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 2,
    backgroundColor: 'transparent',
    transform: isOpen ? 'scale(1)' : 'scale(0)',
}));

const PopupWrapper = styled.div(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    position: 'absolute',
    top: '2%',
    right: '1%',

    width: '197px',
    boxShadow: 'rgba(136, 165, 191, 0.48) 4px 2px 16px',
    borderRadius: '8px',
    zIndex: '3',
    backgroundColor: theme.color.outletBackgroundColor,
}));

const UserInfoContainer = styled.div(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
    width: '100%',
    paddingTop: '18px',
    paddingLeft: '14px',
    paddingBottom: '18px',
    borderBottom: '1px solid rgba(220, 227, 229, 0.3)',
    position: 'relative',
}));
const UserNameText = styled(UserInfoText)(({ isMobile }) => ({
    fontSize: isMobile ? '14px' : ' 18px',
    lineHeight: '18px',
}));

const LinkWrapper = styled.li(({ theme, isMobile }) => ({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    gap: '18px',
    color: theme.color.inactiveBtnTextColor,
    borderBottom: '1px solid rgba(220, 227, 229, 0.3)',
    marginBottom: isMobile ? '32px' : '40px',
    '&:hover': {
        cursor: 'pointer',
    },
}));

const NavLinkStyled = styled(Link)(({ theme }) => ({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: '10px 14px',
    gap: '8px',
    borderRadius: '8px',
    fontSize: '14px',
    lineHeight: '17px',
    fontWeight: '600',

    [theme.media.up(`${theme.breakpoints.m}px`)]: {
        fontSize: '16px',
        lineHeight: '19px',
    },

    '&:hover': {
        color: theme.color.accentTextColor,
        backgroundColor: theme.color.activeSelectionColor,
    },

    '&.active': {
        color: theme.color.accentTextColor,
        backgroundColor: theme.color.activeSelectionColor,
    },
}));
const IconWrapper = styled.div(({ theme }) => ({
    width: '20px',
    height: '20px',

    [theme.media.up(`${theme.breakpoints.m}px`)]: {
        width: '24px',
        height: '24px',
    },
}));
const LogoutButton = styled(Button).attrs(({ theme }) => ({
    buttonStyle: {
        marginLeft: '14px',
        marginBottom: '14px',
        '&:hover': {
            cursor: 'pointer',
        },
    },
}))({});

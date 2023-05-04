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
import { IconButton } from 'core/kit/IconButton';
import { Backdrop } from 'components/Loader/Loader';

export const UserPopup = ({ setIsShowPopup }) => {
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
    const handleClosePopup = () => {
        setIsShowPopup(false);
    };
    
    return (
        <>
            <Backdrop color="transparent" onClick={handleClosePopup} />
            <PopupWrapper>
                <UserInfoContainer>
                    <Avatar
                        size={isMobile ? '38px' : '44px'}
                        username={mainLetter}
                        avatar={avatar}
                    />
                    <UserNameText isMobile={isMobile}>{username}</UserNameText>
                    <IconCrossButton
                        onClick={handleClosePopup}
                        iconName={iconNames.cross}
                        buttonSize={20}
                    />
                    {/* <IconCrossWrapper onClick={handleClosePopup}>
                    <Icon name={iconNames.cross} size="16px" />
                </IconCrossWrapper> */}
                </UserInfoContainer>
                <LinkWrapper isMobile={isMobile}>
                    <NavLinkStyled onClick={handleClosePopup} to="/account">
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

const PopupWrapper = styled.div(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    position: 'absolute',
    top: '2%',
    right: '1%',
    paddingBottom: '12px',

    width: '197px',
    boxShadow: 'rgba(136, 165, 191, 0.48) 4px 2px 16px',
    borderRadius: '8px',
    zIndex: '100',
    backgroundColor: theme.color.outletBackgroundColor,
}));
const IconCrossButton = styled(IconButton).attrs({
    buttonStyle: { position: 'absolute', top: '10%', right: '4%' },
})({});

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

const LinkWrapper = styled.div(({ theme, isMobile }) => ({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    gap: '18px',
    color: theme.color.inactiveBtnTextColor,
    borderBottom: '1px solid rgba(220, 227, 229, 0.3)',
    marginBottom: isMobile ? '32px' : '40px',
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
    transition: 'background-color linear 200ms',

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
    buttonStyle: { margin: 'auto' },
}))({});

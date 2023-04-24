import { iconNames } from "assets/icons/iconNames";
import { Icon } from "core/kit/Icon";
import { NavLink } from "react-router-dom";

import styled from 'styled-components';

export const UserNav = () => {
    
    return (
        <UserNavContainer>
            <LinkWrapper>
                <NavLinkStyled to='/account'>
                    <IconWrapper>
                        <Icon name={iconNames.user} size={"100%"} />
                    </IconWrapper>
                    My account
                </NavLinkStyled>
            </LinkWrapper>
            <LinkWrapper>
                <NavLinkStyled to='/calendar'>
                    <IconWrapper>
                        <Icon name={iconNames.calendar} size={"100%"} />
                    </IconWrapper>
                    Calendar
                </NavLinkStyled>
            </LinkWrapper>          
        </UserNavContainer>
    );
};

const UserNavContainer = styled.ul(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
    color: theme.color.inactiveBtnTextColor,
}));

const LinkWrapper = styled.li(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '18px',
}));

const NavLinkStyled = styled(NavLink)(({ theme }) => ({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: '10px 14px',
    gap: '8px',
    borderRadius: '8px',
    fontSize: "14px",
    lineHeight: '17px',
    fontWeight: '600',


    [theme.media.up(`${theme.breakpoints.m}px`)]: {
        fontSize: "16px",
        lineHeight: '19px',
    },

    "&:hover": {
        color: theme.color.accentTextColor,
        backgroundColor: theme.color.activeSelectionColor
    }
}));

const IconWrapper = styled.div(({ theme }) => ({
    width: '20px',
    height: '20px',

    [theme.media.up(`${theme.breakpoints.m}px`)]: {
        width: '24px',
        height: '24px',
    },
}))

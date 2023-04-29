import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { SideBar } from 'components/SideBar/SideBar';
import { Header } from 'components/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { currentUser } from 'redux/operations';
import { selectUserState } from 'redux/auth/auth.selectors';
import { useMatchMedia } from 'core/hooks/useMatchMedia';

const MainLayout = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();

    const user = useSelector(selectUserState);

    const { isDesktop } = useMatchMedia();

    useEffect(() => {
        if (isDesktop) {
            setIsOpen(true);
        } else setIsOpen(false);
    }, [isDesktop]);

    useEffect(() => {
        if (user.name === null) {
            dispatch(currentUser());
        }
    }, [user.name, dispatch]);

    const handleClose = () => {
        setIsOpen(prev => !prev);
    };

    return (
        <LayoutContainer>
            {isOpen && <SideBar onClick={handleClose} user={user} />}
            <SecondaryContainer>
                <Header onClick={handleClose} />
                {user.name && <Outlet />}
            </SecondaryContainer>
        </LayoutContainer>
    );
};

const LayoutContainer = styled.div(({ theme }) => ({
    display: 'flex',
    backgroundColor: theme.color.outletBackgroundColor,
    width: '100vw',
    height: '100%',
}));

const SecondaryContainer = styled.div(({ theme }) => ({
    padding: '24px 20px 20px 20px',
    display: 'flex',
    width: '100%',
    minHeight: '100vh',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '64px',

    [theme.media.up(`${theme.breakpoints.m}px`)]: {
        padding: '24px 32px 32px 32px',
    },

    [theme.media.up(`${theme.breakpoints.l}px`)]: {
        padding: '24px 32px 32px 32px',
        gap: '32px',
    },
}));

export default MainLayout;

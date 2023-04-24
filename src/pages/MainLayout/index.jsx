import styled from 'styled-components';
import { Outlet } from "react-router-dom";
import { useState } from 'react';
import { SideBar } from 'components/SideBar';
import { Header } from 'components/Header';


export const MainLayout = () => {

    const [isOpen, setIsOpen] = useState(true)


    return <LayoutContainer>
            {isOpen && <SideBar/>}
            <SecondaryContainer>
                <Header onClick={ setIsOpen } />
                <Outlet />
            </SecondaryContainer>
        </LayoutContainer>
}


const LayoutContainer = styled.div(({ theme }) => ({
    display: "flex",
    backgroundColor: theme.color.outletBackgroundColor,
    width: '100%',
    height: '100%',
}));

const SecondaryContainer = styled.div(({ theme }) => ({
    padding: "24px 20px 20px 20px", 
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: '64px', 

    [theme.media.up(`${theme.breakpoints.m}px`)]: {
        padding: "24px 32px 32px 32px"
    },

    [theme.media.up(`${theme.breakpoints.l}px`)]: {
        padding: "24px 32px 32px 32px",
        gap: '32px'
    },
    
}));



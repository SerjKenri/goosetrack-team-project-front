import styled from 'styled-components';
import { Outlet } from "react-router-dom";
import { useState } from 'react';


export const MainLayout = () => {

    const [isOpen, setIsOpen] = useState(true)


    return <LayoutContainer>
            {/* {isOpen && <SideBar/>} */}
            <SecondaryContainer>
                {/* <Header onClick={ setIsOpen } /> */}
                <Outlet />
            </SecondaryContainer>
        </LayoutContainer>
}


const LayoutContainer = styled.div(({ theme }) => ({
    display: "flex",
    backgroundColor: theme.color.outletBackgroundColor,
    width: '100vw',
    height: '100vw',

    outline: "2px solid orange"
}));

const SecondaryContainer = styled.div`
    padding: 24px 20px 20px 20px; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 64px; 
    width: 100%;

    @media screen and (min-width: 768px) {
        padding: 24px 32px 32px 32px
    }

    @media screen and (min-width: 1440px) {
        padding: 40px 32px 32px 32px;
        gap: 32px
    }
`;


// const SecondaryContainer = styled.div(({ theme }) => ({
//     padding: "24px 20px 20px 20px", /*     padding: "24px 32px 32px 32px"   padding: "40px 32px 32px 32px" */
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     gap: '64px', /* 64 32 */
//     width: '100%',
    

//     outline: "2px solid green",
// }));



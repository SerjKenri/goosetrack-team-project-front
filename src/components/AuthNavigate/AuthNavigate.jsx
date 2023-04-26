import { Link } from "react-router-dom";
import styled from "styled-components";

export const AuthNavigate = ({ route, content }) => (
    <AuthNav to={route}>{content}</AuthNav>
);

export const AuthNav = styled(Link)`
    ${({theme})  => `
        font-family: Inter;
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 14px;
        border-bottom: 1px solid ${theme.color.accentTextColor};
        color: ${theme.color.accentTextColor};
        text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
        0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
    
        &:hover,
        :focus {
            color: blue;
            border-color: blue;
        }
    
        @media (min-width: 768px) {
            font-size: 18px;
            line-height: 24px;
        }
    `}
`;



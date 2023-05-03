import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AuthFormTitleMobile } from 'core/kit/text';

export const AuthNavigate = ({ route, content, navStyle }) => (
    <AuthNav to={route} style={navStyle}>
        <AuthFormTitleMobile>{content}</AuthFormTitleMobile>
    </AuthNav>
);

export const AuthNav = styled(Link)(({ theme }) => ({
    textDecoration:'none',
    color: theme.color.accentColor,
    textShadow:
        ' 0px 47px 355px rgba(0, 0, 0, 0.07), 0px 9.4px 57.6875px, rgba(0, 0, 0, 0.035)',
    
    ' &:hover': {
        textDecoration:'underline',
        
    },

    ':focus ': {
        textDecoration:'underline',
    },
}));

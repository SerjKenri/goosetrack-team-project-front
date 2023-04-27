import propTypes from 'prop-types';
import styled from 'styled-components';

import { Icon } from './Icon.jsx';

const ButtonDifference = {
    // Для кнопок: LogOut, Login, SignUp:
    primary: 'primary',

    // Для кнопок: Add,Edit, Save changes:
    secondary: 'secondary',

    // Для кнопки:Cancel:
    cancel: 'cancel',
};

// ===========================================================

// EXAMPLE:
// копі-паст це:
// import { ButtonDifference } from "core/kit/Button/Button.styled";
// прописати сюди:
// //  <Button
//       differentStyles={ButtonDifference.secondary}
//       title="hello"
//       onClick
//       icon
//       buttonStyle={{ backgroundColor: 'green', paddingLeft: '150px' }}
//       textStyle
//       iconName={iconNames.loginIcon}
//     ></Button>
// ===========================================================

const Button = ({
    differentStyles,
    title,
    onClick,
    disabled = false,
    buttonStyle,
    textStyle,
    iconName,
    iconSize,
    type,
}) => {
    return (
        <Container>
            <ButtonWrapper
                style={buttonStyle}
                onClick={onClick}
                disabled={disabled}
                differentStyles={differentStyles}
                type={type}
            >
                {iconName && (
                    <IconContainer>
                        <Icon name={iconName} size={iconSize} />
                    </IconContainer>
                )}

                <Title
                    differentStyles={differentStyles}
                    disabled={disabled}
                    style={textStyle}
                >
                    {title}
                </Title>
            </ButtonWrapper>
        </Container>
    );
};

export { ButtonDifference, Button };
Button.propTypes = {
    differentStyles: propTypes.string,
    title: propTypes.string.isRequired,
    onClick: propTypes.func,
    disabled: propTypes.bool,
    buttonStyle: propTypes.object,
    textStyle: propTypes.object,
    iconName: propTypes.string,
    iconSize: propTypes.string,
};

// ===========================================================

const Container = styled.div({
    flexDirection: 'row',
    justifyContent: 'center',
    display: 'flex',
});

const ButtonWrapper = styled.button(({ differentStyles, disabled, theme }) => ({
    display: 'flex',
    flexDirection:
        differentStyles === ButtonDifference.primary ? 'row-reverse' : 'row',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box',

    height: theme.space.x10,
    borderRadius:
        differentStyles === ButtonDifference.primary
            ? theme.space.x4
            : theme.space.x2,

    paddingLeft: theme.space.x6,
    paddingRight: theme.space.x6,
    paddingTop: theme.space.x4,
    paddingBottom: theme.space.x4,

    background: disabled
        ? theme.color.taskCancelColor
        : theme.color.accentBackgroundColor,
    border: 'none',
    cursor: 'pointer',
    fill: 'white',

    boxShadow:
        differentStyles === ButtonDifference.primary
            ? '4px 2px 16px rgba(136, 165, 191, 0.48)'
            : 'none',

    '&:hover': {
        background:
            differentStyles === ButtonDifference.primary
                ? theme.color.hoverColor
                : theme.color.hoverColor,
        transition: '0.2s ease-in',
    },
    '&:active': {
        transition: '0.2s ease-in',
        border:
            differentStyles === ButtonDifference.primary
                ? `2px solid ${theme.color.btnTextColor}`
                : `2px solid ${theme.color.btnTextColor}`,
    },
}));

const Title = styled.p(({ differentStyles, disabled, theme }) => {
    return {
        fontFamily: theme.font.mainFont,
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize:
            differentStyles === ButtonDifference.primary ? '18px' : '14px',
        lineHeight:
            differentStyles === ButtonDifference.primary ? '133%' : '129%',
        letterSpacing: '-0.02em',
        margin:
            differentStyles === ButtonDifference.primary
                ? '0 11px 0 0'
                : ' 0 0  0 8px',
        padding: 0,
        color: disabled
            ? theme.color.inactiveBtnTextColor
            : differentStyles === ButtonDifference.cancel
            ? '#111111'
            : theme.color.btnTextColor,
    };
});

const IconContainer = styled.div(({ theme }) => ({
    color: theme.color.btnTextColor,
}));

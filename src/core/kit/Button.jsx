import propTypes from 'prop-types';
import styled from 'styled-components';
import {
    primaryButton,
    secondaryButton,
    addTaskButton,
    cancelButton,
} from './text';
import { Icon } from './Icon.jsx';

const ButtonDifference = {
    // Для кнопок: LogOut, Login, SignUp:
    primary: 'primary',

    // Для кнопок: Add,Edit, Save changes:
    secondary: 'secondary',

    // Для кнопки:Cancel:
    cancel: 'cancel',

    // Для кнопки:Cancel:
    addTask: 'addTask',
};

// ===========================================================

// EXAMPLE:
// копі-паст це:
// import { ButtonDifference } from "core/kit/Button/Button";
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
    const Title =
        differentStyles === ButtonDifference.primary
            ? primaryButton
            : differentStyles === ButtonDifference.secondary
            ? secondaryButton
            : differentStyles === ButtonDifference.cancel
            ? cancelButton
            : addTaskButton;
    return (
        <>
            <ButtonWrapper
                style={buttonStyle}
                onClick={onClick}
                disabled={disabled}
                differentStyles={differentStyles}
                type={type}
            >
                {iconName && (
                    <IconContainer>
                        <Icon name={iconName} size={iconSize}/>
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
        </>
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

// const Container = styled.div({
//     flexDirection: 'row',
//     justifyContent: 'center',
//     display: 'flex',
// });

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

    background:
        disabled || differentStyles === ButtonDifference.cancel
            ? theme.color.taskCancelColor
            : differentStyles === ButtonDifference.primary ||
              differentStyles === ButtonDifference.secondary
            ? theme.color.accentBackgroundColor
            : theme.color.activeSelectionColor,
    border:
        differentStyles === ButtonDifference.addTask
            ? `1px dashed ${theme.color.accentColor}`
            : 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    fill: 'white',
    
    boxShadow: disabled
        ? 'none'
        : differentStyles === ButtonDifference.primary
        ? '4px 2px 16px rgba(136, 165, 191, 0.48)'
        : 'none',

    '&:hover': !disabled && {
        background:
            differentStyles === ButtonDifference.primary
                ? theme.color.hoverColor
                : theme.color.hoverColor,
        transition: '0.2s ease-in',
    },
    '&:active': !disabled && {
        transition: '0.2s ease-in',
        border:
            differentStyles === ButtonDifference.primary
                ? `2px solid ${theme.color.btnTextColor}`
                : `2px solid ${theme.color.btnTextColor}`,
    },
}));

const IconContainer = styled.div(({ theme }) => ({
    color: theme.color.btnTextColor,
    marginTop:'5px',
}));

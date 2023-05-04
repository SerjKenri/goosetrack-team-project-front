import styled from 'styled-components';
import propTypes from 'prop-types';
import { Icon } from './Icon';
import { iconNames } from 'assets/icons/iconNames';

// import { useTranslation } from 'react-i18next';

// example
// <Input placeholder={'red'} labelTitle={'hello'} ...etc/>

const Input = ({
    name,
    labelTitle,
    placeholder,
    type = 'text',
    disabled = false,
    value,
    labelStyle,
    inputStyle,
    labelTextStyle,
    resetButton,
    resetValue,
    handleBlur,
    error,
    onChange,
}) => {
    // const { t } = useTranslation();
    // console.log(error);
    return (
        <Label style={labelStyle}>
            {labelTitle && (
                <LabelText style={labelTextStyle}>{labelTitle}</LabelText>
            )}
            <InputContainer>
                <InputComponent
                    autoComplete="off"
                    style={inputStyle}
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    disabled={disabled}
                    value={value}
                    resetButton={resetButton}
                    resetValue={resetValue}
                    onBlur={handleBlur}
                    onChange={onChange}
                />
                {resetButton && (
                    <IconWrapper onClick={resetValue} resetButton>
                        <Icon name={iconNames.cross} size={20} />
                    </IconWrapper>
                )}
                {error && <Error>{error}</Error>}
            </InputContainer>
        </Label>
    );
};

export { Input };

Input.propTypes = {
    type: propTypes.string,
    name: propTypes.string,
    labelTitle: propTypes.string,
    placeholder: propTypes.string,
    icon: propTypes.string,
    isLoading: propTypes.bool,
    value: propTypes.string.isRequired,
    disabled: propTypes.bool,
    labelStyle: propTypes.object,
    labelTextStyle: propTypes.object,
    inputStyle: propTypes.object,
    resetButton: propTypes.bool,
    resetValue: propTypes.func,
};

const Label = styled.label(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.space.x2,
}));

const LabelText = styled.p(({ theme }) => ({
    display: 'inline-flex',
    alignItems: 'center',
    margin: 0,
    fontSize: '12px',
    lineHeight: '12px',
    fontWeight: 500,
    color: theme.color.labelColor,

    [theme.media.up(`${theme.breakpoints.m}px`)]: {
        fontSize: '14px',
        lineHeight: '17px',
    },
}));

const InputComponent = styled.input(({ theme, icon, type, resetButton }) => ({
    width: '100%',
    outline: '1px solid transparent',
    border: '1px solid ' + theme.color.inputBorderColor,
    paddingRight: resetButton ? theme.space.x10 : theme.space.x4,
    paddingLeft: theme.space.x4,
    paddingTop: theme.space.x3,
    paddingBottom: theme.space.x3,
    borderRadius: theme.space.x2,
    backgroundColor: theme.color.inputFieldColor,
    boxSizing: 'border-box',
    fontSize: theme.space.x4 + 'px',
    lineHeight: theme.space.x4 + 'px',
    fontWeight: 600,
    color: theme.color.inputFieldTextColor,
    // to do styles for focus?
    //   "&:focus-visible": {
    //     borderColor: theme.color.accentColor,
    //   },

    '&::placeholder': {
        color: theme.color.inputFieldTextColor,
        fontSize: theme.space.x4 + 'px',
        lineHeight: theme.space.x5 + 'px',
        fontWeight: 400,
    },

    // '&:hover': {
    //     outline: '1px solid #111111'
    // },
}));

const InputContainer = styled.div({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
});

const IconWrapper = styled.div(({ theme, resetButton }) => ({
    cursor: 'pointer',
    color: theme.color.iconColor,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '50%',
    right: resetButton ? 0 : '',
    transform: resetButton ? 'translate(-50%, -50%)' : '',
}));

const Error = styled.p`
    color: #e74a3b;
    font-size: 12px;
    height: 24px;
    position: absolute;
    bottom: -28px;
`;

import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { loginUser } from 'redux/operations';
import { Formik } from 'formik';
import { validationSchema } from 'schemas/loginFormValidation';

import { ButtonDifference, Button } from '../../core/kit/Button';
import { Input } from '../../core/kit/Input';
import { iconNames } from 'assets/icons/iconNames';

import GooseLogIn from '../../assets/images/goose-login.png';
import GooseLogIn2x from '../../assets/images/goose-login@2x.png';

import { AuthNavigate } from 'components/AuthNavigate/AuthNavigate';
import { ROUTING } from 'core/utils/constantsRouting';

export const LoginForm = () => {
    const dispatch = useDispatch();
    const onSubmit = (values, { resetForm }) => {
        dispatch(
            loginUser({
                email: values.email,
                password: values.password,
            })
        );
        resetForm();
    };

    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
            }}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {({
                errors,
                touched,
                values,
                handleSubmit,
                handleBlur,
                handleChange,
                isValid,
            }) => (
                <LoginFormWrap>
                    <LoginFormContainer>
                        <Form autoComplete="off" onSubmit={handleSubmit}>
                            <LoginFormTitle>Log in</LoginFormTitle>
                            <Input
                                name="email"
                                type="email"
                                labelTitle="Email"
                                placeholder="Enter your email"
                                labelTextStyle={{
                                    fontWeight: '600',
                                    lineHeight: '15px',
                                    marginBottom: '2px',
                                }}
                                inputStyle={{
                                    marginBottom: '24px',
                                    borderRadius: '8px',
                                    border: '1px solid rgba(220, 227, 229, 0.6)',
                                    height: '46px',
                                }}
                                handleBlur={handleBlur}
                                onChange={handleChange}
                                value={values.email}
                                error={
                                    touched.email && errors.email
                                        ? errors.email
                                        : ''
                                }
                            />

                            <Input
                                name="password"
                                type="password"
                                labelTitle="Password"
                                placeholder="Enter your password"
                                labelTextStyle={{
                                    fontWeight: '600',
                                    lineHeight: '15px',
                                    marginBottom: '2px',
                                }}
                                inputStyle={{
                                    marginBottom: '24px',
                                    borderRadius: '8px',
                                    border: '1px solid rgba(220, 227, 229, 0.6)',
                                    height: '46px',
                                }}
                                handleBlur={handleBlur}
                                onChange={handleChange}
                                value={values.password}
                                error={
                                    touched.password && errors.password
                                        ? errors.password
                                        : ''
                                }
                            />

                            <Button
                                type="submit"
                                differentStyles={ButtonDifference.primary}
                                // disabled={isValid}
                                title="Log In"
                                // onClick
                                icon
                                buttonStyle={{
                                    backgroundColor: '#3e85f3',
                                    paddingLeft: '10px',
                                    width: '287px',
                                    height: '46px',
                                    marginTop: '8px',
                                }}
                                // textStyle
                                iconName={iconNames.loginIcon}
                                iconSize="15"
                            ></Button>
                        </Form>
                        <AuthNavigate
                            route={ROUTING.REGISTER}
                            content="Sign up"
                        />
                        <LoginGooseImg
                            srcset={`${GooseLogIn} 1x, ${GooseLogIn2x} 2x`}
                            src={`${GooseLogIn}`}
                            alt="goose"
                        />
                    </LoginFormContainer>
                </LoginFormWrap>
            )}
        </Formik>
    );
};

const LoginFormWrap = styled.div(({ theme }) => ({
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.color.authBackgroundColor,
}));

const LoginFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

const Form = styled.form(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    padding: '40px 24px',
    width: '335px',
    marginBottom: '18px',
    backgroundColor: theme.color.mainBackgroundColor,
    borderRadius: '8px',

    [theme.media.up(`${theme.breakpoints.m}px`)]: {
        padding: '40px',
        width: '480px',
        marginBottom: '24px',
    },
}));

const LoginFormTitle = styled.h1`
    ${({ theme }) => {
        return `
        fontWeight: 600;
        fontSize: 18px;
        lineHeight: 24px;
        color: ${theme.color.accentTextColor};
        textShadow: 0px 47px 355px rgba(0, 0, 0, 0.07)
        0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
        marginBottom: 32px;
        
        @media (minWidth: 768px) {
            fontSize:24px;
        }`;
    }}
`;

const LoginGooseImg = styled.img`
    display: none;

    @media (min-width: 1440px) {
        position: fixed;
        width: 368px;
        height: 521px;
        right: 20px;
        bottom: 20px;
        display: block;
    }
`;

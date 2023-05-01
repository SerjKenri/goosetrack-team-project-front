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
                // isValid,
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
                                    marginTop: '32px',
                                }}
                                inputStyle={{
                                    borderRadius: '8px',
                                    height: '46px',
                                    border:
                                        touched.email && errors.email
                                            ? '1px solid #E74A3B'
                                            : '1px solid rgba(220, 227, 229, 0.6)',
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
                                    marginTop: '24px',
                                }}
                                inputStyle={{
                                    borderRadius: '8px',
                                    height: '46px',
                                    border:
                                        touched.email && errors.email
                                            ? '1px solid #E74A3B'
                                            : '1px solid rgba(220, 227, 229, 0.6)',
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
                                // disabled={!isValid}
                                title="Log In"
                                buttonStyle={{
                                    paddingLeft: '10px',
                                    width: '287px',
                                    height: '46px',
                                    margin: '32px auto 0px',
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
                        <LoginImg
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
    ${({ theme }) => `
        font-weight: 600;
        font-size: 18px;
        line-height: 24px;
        color: ${theme.color.accentTextColor};
        text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07)
        0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
        margin-bottom: 8px;
        
        @media (min-width: 768px) {
            font-size:24px;
        }`}
`;

const LoginImg = styled.img`
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

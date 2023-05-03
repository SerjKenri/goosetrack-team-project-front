import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { loginUser } from 'redux/operations';
import { Formik } from 'formik';
import { useValidationSchema } from 'schemas/loginFormValidation';

import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

import { ButtonDifference, Button } from '../../core/kit/Button';
import { Input } from '../../core/kit/Input';
import { iconNames } from 'assets/icons/iconNames';

import GooseLogIn from '../../assets/images/goose-login.png';
import GooseLogIn2x from '../../assets/images/goose-login@2x.png';

import { AuthNavigate } from 'components/AuthNavigate/AuthNavigate';
import { ROUTING } from 'core/utils/constantsRouting';
import { Link } from 'react-router-dom';

export const LoginForm = () => {
    const { t } = useTranslation();
    
    const dispatch = useDispatch();
    const { validationSchema } = useValidationSchema();
   
    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
            }}
            validationSchema={validationSchema}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
                try {
                    const result = await dispatch(
                        loginUser({
                            email: values.email,
                            password: values.password,
                        })
                    );
                    if (result) {
                        toast.success('Login is successful');
                        setSubmitting(false);
                        resetForm();
                    }
                } catch (error) {
                    toast.error('Email or password is wrong');
                }
            }}
            
        >
            {({
                errors,
                touched,
                values,
                handleSubmit,
                handleBlur,
                handleChange,
                isSubmitting,
            }) => (
                <LoginFormWrap>
                    <LoginFormContainer>
                        <Form autoComplete="off" onSubmit={handleSubmit}>
                            <LoginFormTitle>
                                {t('loginPage.login')}
                            </LoginFormTitle>
                            <Input
                                name="email"
                                type="email"
                                labelTitle={t('loginPage.email')}
                                placeholder={'example@gmail.com'}
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
                                labelTitle={t('loginPage.password')}
                                placeholder={t(
                                    'signUpPage.inputPlaceholderPassword'
                                )}
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
                                        touched.password && errors.password
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
                                disabled={isSubmitting}
                                title={t('loginPage.login')}
                                buttonStyle={{
                                    paddingLeft: '10px',
                                    width: '287px',
                                    height: '46px',
                                    margin: '40px auto 0px',
                                }}
                                // textStyle

                                iconName={iconNames.loginIcon}
                                iconSize="15"
                            ></Button>
                        </Form>
                        <AuthNavigate
                            route={ROUTING.REGISTER}
                            content={t('signUpPage.signUp')}
                        />
                        <NavToRestorePass to={`/${ROUTING.RESTORE_PASS}`}>
                            {t('sendMailForgetPass.labelTitleName')}
                        </NavToRestorePass>
                        <NavToRestorePass to={`/${ROUTING.RESEND_VERIFY}`}>
                            {t('ResendVerifyEmailForm.resendEmail')}
                        </NavToRestorePass>
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

//////////////
export const NavToRestorePass = styled(Link)`
    ${({ theme }) => `
        font-family: Inter;
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 14px;
        border-bottom: 1px solid ${theme.color.accentTextColor};
        color: ${theme.color.accentTextColor};
        text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
        0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
        margin-top: 8px;
    
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

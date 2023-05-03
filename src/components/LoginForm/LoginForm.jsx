import { useDispatch } from 'react-redux';
import styled, { useTheme } from 'styled-components';
import { loginUser } from 'redux/operations';
import { Formik } from 'formik';
import { useValidationSchema } from 'schemas/loginFormValidation';
import { useMatchMedia } from 'core/hooks/useMatchMedia';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

import { ButtonDifference, Button } from '../../core/kit/Button';
import { Input } from '../../core/kit/Input';
import { iconNames } from 'assets/icons/iconNames';
import { LangaguesBar } from 'components/LangaguesBar/LangaguesBar';

import GooseLogIn from '../../assets/images/goose-login.png';
import GooseLogIn2x from '../../assets/images/goose-login@2x.png';

import { AuthNavigate } from 'components/AuthNavigate/AuthNavigate';
import { ROUTING } from 'core/utils/constantsRouting';

export const LoginForm = () => {
    const { t } = useTranslation();
    const { isTablet, isMobile } = useMatchMedia();
    const theme = useTheme();
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
                        // toast.success('Login is successful');
                        // toast.success(`${t('loginPage.toastSuccess')}`);
                        setSubmitting(false);
                        resetForm();
                    }
                } catch (error) {
                    // toast.error('Email or password is wrong');
                    toast.error(`${t('loginPage.toastError')}`);
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
            }) => (
                <LoginFormWrap>
                    <LoginFormContainer>
                        <Form autoComplete="off" onSubmit={handleSubmit}>
                            <LangWrap>
                                <LangaguesBar />
                            </LangWrap>
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
                                    backgroundColor:
                                        theme.color.calendarCellColor,
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
                                    backgroundColor:
                                        theme.color.calendarCellColor,
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

                            <LoginButton
                                type="submit"
                                differentStyles={ButtonDifference.primary}
                                disabled={!values.email || !values.password}
                                title={t('loginPage.login')}
                                isMobile={isMobile}
                                isTablet={isTablet}
                                iconName={iconNames.loginIcon}
                                iconSize="15"
                            ></LoginButton>
                        </Form>
                        <AuthNavigate
                            route={ROUTING.REGISTER}
                            content={t('signUpPage.signUp')}
                        />
                        <AuthNavigate
                            route={`/${ROUTING.RESTORE_PASS}`}
                            content={t('sendMailForgetPass.labelTitleName')}
                        />
                        <AuthNavigate
                            route={`/${ROUTING.RESEND_VERIFY}`}
                            content={t('ResendVerifyEmailForm.resendEmail')}
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
    padding: '20px 24px 40px 24px',
    width: '335px',
    marginBottom: '18px',
    backgroundColor: theme.color.mainBackgroundColor,
    borderRadius: '8px',

    [theme.media.up(`${theme.breakpoints.m}px`)]: {
        padding: '20px 40px 40px 40px',
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

const LoginButton = styled(Button).attrs(({ theme, isTablet, isMobile }) => ({
    buttonStyle: {
        width: isMobile ? '287px' : isTablet ? '400px' : '400px',
        paddingLeft: '10px',
        height: '46px',
        margin: '48px auto 0px',
    },
}))({});

const LangWrap = styled.div`
    display: flex;
    flex-direction: row-reverse;
`;





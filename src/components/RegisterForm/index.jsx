// import { useTranslation } from 'react-i18next';
import { useRegisterForm } from 'components/RegisterForm/useRegisterForm';
import styled, {useTheme} from 'styled-components';
import { Input } from 'core/kit/Input';
import { Button, ButtonDifference } from 'core/kit/Button';
import { iconNames } from 'assets/icons/iconNames';
import { LangaguesBar } from 'components/LangaguesBar/LangaguesBar';
import { LangWrap } from 'components/LoginForm/LoginForm';

import GooseRegister from '../../assets/images/goose-register.png';
import GooseRegister2x from '../../assets/images/goose-register@2x.png';

import { Formik } from 'formik';
import { AuthNavigate } from 'components/AuthNavigate/AuthNavigate';
import { ROUTING } from 'core/utils/constantsRouting';

import { useMatchMedia } from 'core/hooks/useMatchMedia';

export const RegisterForm = () => {
    const { t, onSubmit, validationSchema } = useRegisterForm();
    const { isDesktop, isMobile, isTablet } = useMatchMedia();
    const theme = useTheme();

    return (
        <>
            <Formik
                initialValues={{
                    email: '',
                    name: '',
                    password: '',
                }}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({
                    values,
                    errors,
                    handleSubmit,
                    handleChange,
                    isValid,
                    handleBlur,
                    touched,
                }) => (
                    <SignUpFormWrap>
                        <FormContainer>
                            <Form onSubmit={handleSubmit} autoComplete="off">
                                <LangWrap>
                                    <LangaguesBar />
                                </LangWrap>
                                <SignUpFormTitle>
                                    {t('signUpPage.signUp')}
                                </SignUpFormTitle>
                                <SignUpLabel>
                                    <Input
                                        name="email"
                                        type="text"
                                        labelTitle={t(
                                            'signUpPage.labelTitleEmail'
                                        )}
                                        placeholder={t(
                                            'signUpPage.inputPlaceholderEmail'
                                        )}
                                        labelTextStyle={{
                                            fontWeight: '600',
                                            lineHeight: '15px',
                                            marginBottom: '2px',
                                            marginTop: '32px',
                                        }}
                                        handleBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.email}
                                        error={
                                            touched.email && errors.email
                                                ? errors.email
                                                : ''
                                        }
                                        inputStyle={{
                                            fontWeight:'400',
                                            height: '46px',
                                            border:
                                                touched.email && errors.email
                                                    ? '1px solid #E74A3B'
                                                    : '1px solid rgba(220, 227, 229, 0.6)',
                                            backgroundColor: theme.color.calendarCellColor,
                                        }}
                                    />
                                </SignUpLabel>
                                <SignUpLabel>
                                    <Input
                                        name="name"
                                        type="text"
                                        labelTitle={t(
                                            'signUpPage.labelTitleName'
                                        )}
                                        placeholder={t(
                                            'signUpPage.inputPlaceholderName'
                                        )}
                                        labelTextStyle={{
                                            fontWeight: '600',
                                            lineHeight: '15px',
                                            marginBottom: '2px',
                                            marginTop: '24px',
                                        }}
                                        handleBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.name}
                                        error={
                                            touched.name && errors.name
                                                ? errors.name
                                                : ''
                                        }
                                        inputStyle={{
                                            fontWeight:'400',
                                            height: '46px',
                                            border:
                                                touched.email && errors.email
                                                    ? '1px solid #E74A3B'
                                                    : '1px solid rgba(220, 227, 229, 0.6)',
                                            backgroundColor: theme.color.calendarCellColor,
                                        }}
                                    />
                                </SignUpLabel>
                                <SignUpLabel>
                                    <Input
                                        name="password"
                                        type="password"
                                        labelTitle={t(
                                            'signUpPage.labelTitlePassword'
                                        )}
                                        placeholder={t(
                                            'signUpPage.inputPlaceholderPassword'
                                        )}
                                        labelTextStyle={{
                                            fontWeight: '600',
                                            lineHeight: '15px',
                                            marginBottom: '2px',
                                            marginTop: '24px',
                                        }}
                                        handleBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.password}
                                        error={
                                            touched.password && errors.password
                                                ? errors.password
                                                : ''
                                        }
                                        inputStyle={{
                                            fontWeight:'400',
                                            height: '46px',
                                            border:
                                                touched.email && errors.email
                                                    ? '1px solid tomato'
                                                    : '1px solid #DCE3E5',
                                            backgroundColor: theme.color.calendarCellColor,
                                        }}
                                    />
                                </SignUpLabel>
                                <SignButton
                                    type="submit"
                                    differentStyles={ButtonDifference.primary}
                                    disabled={!values.email || !values.password || !values.name}
                                    title={t('signUpPage.signUp')}
                                    buttonStyle={{
                                        backgroundColor: '#3e85f3',
                                        paddingLeft: '10px',
                                        display: 'flex',
                                        marginTop: '40px',
                                        flex: '1 1 auto',
                                    }}
                                    isMobile={isMobile}
                                    isTablet={isTablet}
                                    iconName={iconNames.loginIcon}
                                    iconSize="15"
                                ></SignButton>
                            </Form>

                            <AuthNavigate
                                route={ROUTING.LOGIN}
                                content={t('loginPage.login')}
                            />

                            {isDesktop && (
                                <SignUpImg
                                    srcset={`${GooseRegister} 1x , ${GooseRegister2x} 2x`}
                                    src={`${GooseRegister}`}
                                    alt="goose"
                                />
                            )}
                        </FormContainer>
                    </SignUpFormWrap>
                )}
            </Formik>
        </>
    );
};

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

const SignUpFormTitle = styled.h1`
    ${({ theme }) => `
        font-weight: 600;
        font-size: 18px;
        line-height: 24px;
        color: ${theme.color.accentTextColor};
        margin-bottom: 8px;
        
        @media (min-width: 768px) {
            font-size:24px;
        }`}
`;

const SignUpFormWrap = styled.div(({ theme }) => ({
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.color.authBackgroundColor,
}));

const SignUpLabel = styled.label(({ theme, p }) => ({
    display: 'flex',
    flexDirection: 'column',
    marginBotton: '8px',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '12px',
    lineHeight: '15px',
}));

const SignUpImg = styled.img`
    z-index: 1;
    position: fixed;
    max-width: 353px;
    max-height: 330px;
    left: 49px;
    bottom: -5px;
    display: block;
    transform: rotate(-9.2deg);
`;

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

const SignButton = styled(Button).attrs(({ theme, isTablet, isMobile }) => ({
    buttonStyle: {
        width: isMobile ? '287px' : isTablet ? '400px' : '400px',
        paddingLeft: '10px',
        height: '46px',
        margin: '48px auto 0px',
    },
}))({});

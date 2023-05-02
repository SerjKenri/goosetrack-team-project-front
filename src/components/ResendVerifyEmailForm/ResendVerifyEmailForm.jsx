import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import styled from 'styled-components';

import { Button, ButtonDifference } from 'core/kit/Button';
import { sendMailForVerify } from 'redux/operations';
import { Input } from 'core/kit/Input';
import { useTranslation } from 'react-i18next';
import { AuthNavigate } from 'components/AuthNavigate/AuthNavigate';
import { ROUTING } from 'core/utils/constantsRouting';
import GooseLogIn from '../../assets/images/goose-login.png';
import GooseLogIn2x from '../../assets/images/goose-login@2x.png';
import { userForgetPassSchema } from 'schemas/userForgetPassValidation';
import { useNavigate } from 'react-router-dom';

export const ResendVerifyEmailForm = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onSubmit = (values, { resetForm }) => {
        dispatch(
            sendMailForVerify({
                email: values.email,
            })
        );
        resetForm();
        navigate('/');
    };
    return (
        <Formik
            initialValues={{
                email: '',
            }}
            validationSchema={userForgetPassSchema}
            onSubmit={onSubmit}
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
                            <LoginFormTitle>
                                {t('ResendVerifyEmailForm.labelTitleName')}
                            </LoginFormTitle>
                            <LoginFormInfoTextBold>
                                {t('ResendVerifyEmailForm.textInstruction')}
                            </LoginFormInfoTextBold>
                            <LoginFormInfoText>
                                {t('ResendVerifyEmailForm.text')}
                            </LoginFormInfoText>
                            <Input
                                name="email"
                                type="email"
                                labelTitle={t(
                                    'ResendVerifyEmailForm.labelTitleEmail'
                                )}
                                placeholder={t(
                                    'ResendVerifyEmailForm.inputPlaceholderEmail'
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

                            <Button
                                type="submit"
                                differentStyles={ButtonDifference.primary}
                                disabled={!values.email}
                                title={t('ResendVerifyEmailForm.sendEmail')}
                                buttonStyle={{
                                    backgroundColor: '#3e85f3',
                                    width: '287px',
                                    height: '46px',
                                    marginTop: '32px',
                                    marginLeft: 'auto',
                                    marginRight: 'auto',
                                }}
                                textStyle={{
                                    margin: '0',
                                }}
                            ></Button>
                        </Form>
                        <AuthNavigate route={ROUTING.LOGIN} content="Log In" />
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
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 24px;
        
        @media (min-width: 768px) {
            font-size:24px;
        }`}
`;

const LoginFormInfoTextBold = styled.p`
    font-weight: 600;
    font-size: 14px;
`;
const LoginFormInfoText = styled.p`
    font-size: 14px;
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

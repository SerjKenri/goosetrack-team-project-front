import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import { Button, ButtonDifference } from 'core/kit/Button';
import { resetNewPass } from 'redux/operations';
import { Input } from 'core/kit/Input';
import { useTranslation } from 'react-i18next';
import { AuthNavigate } from 'components/AuthNavigate/AuthNavigate';
import { ROUTING } from 'core/utils/constantsRouting';
import GooseLogIn from '../../assets/images/goose-login.png';
import GooseLogIn2x from '../../assets/images/goose-login@2x.png';
import { useNavigate } from 'react-router-dom';
import { userPassResetSchema } from 'schemas/userPassResetSchema';

export const UserPassReset = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { passToken } = useParams();

    const onSubmit = (values, { resetForm }) => {
        console.log('verificationToken', passToken);
        dispatch(
            resetNewPass({
                newPassword: values.newPassword,
                passToken: passToken,
            })
        );
        resetForm();
        navigate('/');
    };
    return (
        <Formik
            initialValues={{
                newPassword: '',
                confirmPassword: '',
            }}
            validationSchema={userPassResetSchema}
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
                                {t('chengePassPage.labelTitleName')}
                            </LoginFormTitle>
                            <Input
                                name="newPassword"
                                type="password"
                                labelTitle={t('chengePassPage.newPassword')}
                                placeholder={t(
                                    'chengePassPage.newPassPlaceholder'
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
                                        touched.newPassword &&
                                        errors.newPassword
                                            ? '1px solid #E74A3B'
                                            : '1px solid rgba(220, 227, 229, 0.6)',
                                }}
                                handleBlur={handleBlur}
                                onChange={handleChange}
                                value={values.newPassword}
                                error={
                                    touched.newPassword && errors.newPassword
                                        ? errors.newPassword
                                        : ''
                                }
                            />
                            <Input
                                name="confirmPassword"
                                type="password"
                                labelTitle={t('chengePassPage.confNewPass')}
                                placeholder={t(
                                    'chengePassPage.confPassPlaceholder'
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
                                        touched.confirmPassword &&
                                        errors.confirmPassword
                                            ? '1px solid #E74A3B'
                                            : '1px solid rgba(220, 227, 229, 0.6)',
                                }}
                                handleBlur={handleBlur}
                                onChange={handleChange}
                                value={values.confirmPassword}
                                error={
                                    touched.confirmPassword &&
                                    errors.confirmPassword
                                        ? errors.confirmPassword
                                        : ''
                                }
                            />
                            <Button
                                type="submit"
                                differentStyles={ButtonDifference.primary}
                                disabled={
                                    values.newPassword.length > 0 &&
                                    values.newPassword ===
                                        values.confirmPassword
                                        ? false
                                        : true
                                }
                                title={t('chengePassPage.labelTitleName')}
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

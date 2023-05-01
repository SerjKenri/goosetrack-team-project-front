import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { Button, ButtonDifference } from 'core/kit/Button';
import { changePass } from 'redux/operations';
import { Input } from 'core/kit/Input';
import { useTranslation } from 'react-i18next';
import { userUpdPassSchema } from 'schemas/userPassUpdValidation';
import { TextH2 } from 'core/kit/text';
import { useMatchMedia } from 'core/hooks/useMatchMedia';

export const ChangeUserPass = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isDesktop, isTablet, isMobile } = useMatchMedia();

    const onSubmit = (values, { resetForm }) => {
        dispatch(
            changePass({
                currentPassword: values.currentPassword,
                newPassword: values.newPassword,
                // confirmPassword: values.confirmPassword,
            })
        );
        resetForm();
        navigate('/account');
    };
    return (
        <Container>
            <Formik
                initialValues={{
                    currentPassword: '',
                    newPassword: '',
                    confirmPassword: '',
                }}
                validationSchema={userUpdPassSchema}
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
                    // <LoginFormWrap>
                    <LoginFormContainer>
                        <Form autoComplete="off" onSubmit={handleSubmit}>
                            <TextH2>
                                {t('chengePassPage.labelTitleName')}
                            </TextH2>
                            <FormInput
                                name="currentPassword"
                                type="password"
                                labelTitle={t('chengePassPage.oldPassword')}
                                placeholder={t(
                                    'chengePassPage.oldPassPlaceholder'
                                )}
                                isMobile={isMobile}
                                isDesktop={isDesktop}
                                handleBlur={handleBlur}
                                onChange={handleChange}
                                value={values.currentPassword}
                                error={
                                    touched.password && errors.password
                                        ? errors.password
                                        : ''
                                }
                                touched={touched}
                                errors={errors}
                            />

                            <FormInput
                                name="newPassword"
                                type="password"
                                labelTitle={t('chengePassPage.newPassword')}
                                placeholder={t(
                                    'chengePassPage.newPassPlaceholder'
                                )}
                                isMobile={isMobile}
                                isDesktop={isDesktop}
                                handleBlur={handleBlur}
                                onChange={handleChange}
                                value={values.newPassword}
                                error={
                                    touched.password && errors.password
                                        ? errors.password
                                        : ''
                                }
                                touched={touched}
                                errors={errors}
                            />
                            <FormInput
                                name="confirmPassword"
                                type="password"
                                labelTitle={t('chengePassPage.confNewPass')}
                                placeholder={t(
                                    'chengePassPage.confPassPlaceholder'
                                )}
                                isMobile={isMobile}
                                isDesktop={isDesktop}
                                handleBlur={handleBlur}
                                onChange={handleChange}
                                value={values.confirmPassword}
                                error={
                                    touched.password && errors.password
                                        ? errors.password
                                        : ''
                                }
                                touched={touched}
                                errors={errors}
                            />

                            <SaveButton
                                type="submit"
                                differentStyles={ButtonDifference.secondary}
                                disabled={
                                    values.newPassword.length > 0 &&
                                    values.newPassword ===
                                        values.confirmPassword
                                        ? false
                                        : true
                                }
                                isMobile={isMobile}
                                isTablet={isTablet}
                                title={t('chengePassPage.labelTitleName')}
                            />
                        </Form>
                        {/* <AuthNavigate
                            route={ROUTING.REGISTER}
                            content="Sign up"
                        /> */}
                        {/* <LoginImg
                                srcset={`${GooseLogIn} 1x, ${GooseLogIn2x} 2x`}
                                src={`${GooseLogIn}`}
                                alt="goose"
                            /> */}
                    </LoginFormContainer>
                    /* </LoginFormWrap> */
                )}
            </Formik>
        </Container>
    );
};

const LoginFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
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

const Container = styled.div(({ theme, isTablet, isDesktop }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: theme.color.calendarCellColor,
    paddingTop: '40px',
    paddingBottom: isTablet ? '40px' : '60px',
    paddingLeft: 'auto',
    paddingRight: 'auto',
    width: '335px',
    height: '501px',
    borderRadius: '16px',

    [theme.media.up(`${theme.breakpoints.m}px`)]: {
        width: '480px',
        height: '569px',
        paddingTop: '60px',
        paddingBottom: '60px',
    },
}));

const SaveButton = styled(Button).attrs(({ theme, isMobile, isTablet }) => ({
    buttonStyle: {
        width: isMobile ? '195px' : isTablet ? '262px' : '262px',
        height: isMobile ? '46px' : isTablet ? '48px' : '48px',
        borderRadius: '16px',
        backgroundColor: theme.color.accentColor,
        marginTop: '60px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
}))({});

const FormInput = styled(Input).attrs(
    ({ theme, isMobile, isDesktop, touched, errors }) => ({
        labelTextStyle: {
            fontSize: isMobile ? '12px' : '14px',
            lineHeight: isMobile ? '1.16' : '1.3',
            fontWeight: '400',
            marginBottom: '2px',
            marginTop: '24px',
        },
        inputStyle: {
            position: 'relative',
            outline: 'none',
            backgroundColor: theme.color.calendarCellColor,
            width: isMobile ? '299px' : '354px',
            height: isMobile ? '42px' : '46px',
            fontSize: isMobile ? '14px' : '16px',
            lineHeight: isMobile ? '1.3' : '1.125',
            color: theme.color.mainTextColor,
            marginLeft: isDesktop ? '-13%' : '0',
            border:
                touched.email && errors.email
                    ? '1px solid' + theme.color.taskHighColor
                    : '1px solid' + theme.color.modalBorder,
        },
    })
)({});

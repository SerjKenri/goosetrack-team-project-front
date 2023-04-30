import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import styled from 'styled-components';

import { Button, ButtonDifference } from 'core/kit/Button';
import { changePass } from 'redux/operations';
import { Input } from 'core/kit/Input';
import { useTranslation } from 'react-i18next';
import { AuthNavigate } from 'components/AuthNavigate/AuthNavigate';
import { ROUTING } from 'core/utils/constantsRouting';
import GooseLogIn from '../../assets/images/goose-login.png';
import GooseLogIn2x from '../../assets/images/goose-login@2x.png';
import { userForgetPassSchema } from 'schemas/userForgetPassValidation';

export const SendMailForgetPass = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const onSubmit = (values, { resetForm }) => {
        dispatch(
            changePass({
                email: values.email,
            })
        );
        resetForm();
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
                                Forgot your password?
                                {/* {t('chengePassPage.labelTitleName')} */}
                            </LoginFormTitle>
                            <LoginFormInfoTextBold>
                                Type in the email you used to register in
                                GooseTrack.
                            </LoginFormInfoTextBold>
                            <LoginFormInfoText>
                                We'll send you a link to create your new
                                password.
                            </LoginFormInfoText>
                            <Input
                                name="email"
                                type="email"
                                labelTitle="Email"
                                placeholder="Enter your email"
                                // placeholder={t(
                                //     'chengePassPage.oldPassPlaceholder'
                                // )}
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
                                // disabled={
                                //     values.newPassword.length > 0 &&
                                //     values.newPassword ===
                                //         values.confirmPassword
                                //         ? false
                                //         : true
                                // }
                                title="Send email"
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

// const LoginFormWrap = styled.div(({ theme }) => ({
//     height: '100vh',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: theme.color.authBackgroundColor,
// }));

// const LoginFormContainer = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     width: 100%;
// `;

// const Form = styled.form(({ theme }) => ({
//     display: 'flex',
//     flexDirection: 'column',
//     padding: '40px 24px',
//     width: '335px',
//     marginBottom: '18px',
//     backgroundColor: theme.color.mainBackgroundColor,
//     borderRadius: '8px',

//     [theme.media.up(`${theme.breakpoints.m}px`)]: {
//         padding: '40px',
//         width: '480px',
//         marginBottom: '24px',
//     },
// }));

// const LoginFormTitle = styled.h1`
//     ${({ theme }) => `
//     margin: auto;
//         font-weight: 600;
//         font-size: 18px;
//         line-height: 24px;
//         color: ${theme.color.accentTextColor};
//         text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07)
//         0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
//         margin-bottom: 8px;

//         @media (min-width: 768px) {
//             font-size:24px;
//         }`}
// `;

// const Container = styled.div(({ theme, isTablet, isDesktop }) => ({
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     position: 'relative',
//     backgroundColor: theme.color.calendarCellColor,
//     paddingTop: '40px',
//     paddingBottom: isTablet ? '40px' : '60px',
//     paddingLeft: 'auto',
//     paddingRight: 'auto',
//     width: '335px',
//     height: '653px',
//     borderRadius: '16px',
//     [theme.media.between(
//         `${theme.breakpoints.m}px`,
//         `${theme.breakpoints.l}px`
//     )]: {
//         width: '704px',
//         height: '854px',
//         paddingBottom: '40px',
//     },
//     [theme.media.up(`${theme.breakpoints.l}px`)]: {
//         width: '1087px',
//         height: '752px',
//         paddingTop: '60px',
//         paddingBottom: '60px',
//     },
// }));

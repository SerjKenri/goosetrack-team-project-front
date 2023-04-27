// import { useTranslation } from 'react-i18next';
import { useRegisterForm } from 'components/RegisterForm/useRegisterForm';
import styled from 'styled-components';
import { Input } from 'core/kit/Input';
import { Button, ButtonDifference } from 'core/kit/Button';
import { iconNames } from 'assets/icons/iconNames';

import GooseRegister from '../../assets/images/goose-register.png';
import GooseRegister2x from '../../assets/images/goose-register@2x.png';

import { Formik } from 'formik';
import { AuthNavigate } from 'components/AuthNavigate/AuthNavigate';
import { ROUTING } from 'core/utils/constantsRouting';


import { useMatchMedia } from 'core/hooks/useMatchMedia';


// const LangaguesBar = () => {
//     const LANGAGUES = ['en', 'ua'];
//     const { i18n } = useTranslation();

//     return (
//         <div>
//             <ul>
//                 {LANGAGUES.map(langague => {
//                     console.log(langague);
//                     return (
//                         <li key={langague}>
//                             <button
//                                 id={
//                                     i18n.resolvedLanguage === langague
//                                         ? 'selectedLang'
//                                         : 'langId'
//                                 }
//                                 onClick={() => i18n.changeLanguage(langague)}
//                             >
//                                 {langague}
//                             </button>
//                         </li>
//                     );
//                 })}
//             </ul>
//         </div>
//     );
// };

export const RegisterForm = () => {
    const { t, onSubmit, validationSchema } = useRegisterForm();
    const { isDesktop } = useMatchMedia();
    return (
        <>
            {/* <LangaguesBar /> */}
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
                                <SignUpFormTitle>Sign Up</SignUpFormTitle>
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
                                        handleBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.email}
                                        error={
                                            touched.email && errors.email
                                                ? errors.email
                                                : ''
                                        }
                                        inputStyle={{
                                            border:
                                                touched.email && errors.email
                                                    ? '1px solid #E74A3B'
                                                    : '1px solid rgba(220, 227, 229, 0.6)',

                                            backgroundColor: '#ffff',
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
                                        handleBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.name}
                                        error={
                                            touched.name && errors.name
                                                ? errors.name
                                                : ''
                                        }
                                        inputStyle={{
                                            border:
                                                touched.email && errors.email
                                                ? '1px solid #E74A3B'
                                                : '1px solid rgba(220, 227, 229, 0.6)',

                                            backgroundColor: '#ffff',
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
                                        handleBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.password}
                                        error={
                                            touched.password && errors.password
                                                ? errors.password
                                                : ''
                                        }
                                        inputStyle={{
                                            border:
                                                touched.email && errors.email
                                                    ? '1px solid tomato'
                                                    : '1px solid #DCE3E5',

                                            backgroundColor: '#ffff',
                                        }}
                                    />
                                </SignUpLabel>
                                <Button
                                    type="submit"
                                    differentStyles={ButtonDifference.primary}
                                    disabled={!isValid}
                                    title={
                                        !isValid
                                            ? t('signUpPage.button')
                                            : t('signUpPage.signUp')
                                    }
                                    buttonStyle={{
                                        backgroundColor: '#3e85f3',
                                        paddingLeft: '10px',
                                        display: 'flex',
                                        marginTop: '40px',
                                        flex: '1 1 auto',
                                    }}
                                    iconName={iconNames.loginIcon}
                                    iconSize="15"
                                ></Button>
                            </Form>

                            <AuthNavigate route={ROUTING.LOGIN} content="Log In" />
                            
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

const Form = styled.form`
    z-index: 10;
    display: flex;
    flex-direction: column;
    padding: 40px 24px;
    width: 335px;
    margin-bottom: 18px;
    background-color: #ffffff;
    border-radius: 8px;

    @media (min-width: 768px) {
        padding: 40px;
        width: 480px;
        margin-bottom: 24px;
    }
`;

const SignUpFormTitle = styled.h1(({ theme }) => ({
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '24px',
    lineHeight: '24px',
    color: theme.color.accentTextColor,
    marginBottom: '22px',
}));

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
    marginTop: '15px',
}));

const SignUpImg = styled.img`
    z-index: 1;
    position: fixed;
    max-width: 353px;
    max-height: 330px;
    left: 49px;
    bottom: -5px;
    display: block;
    left: 49px;
    transform: rotate(-9.2deg);
`;

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

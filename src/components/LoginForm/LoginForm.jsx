// import { useDispatch } from 'react-redux';
// import { login } from 'redux';
import { Formik } from 'formik';
import { validationSchema } from 'schemas/loginFormValidation';
import styled from 'styled-components';
import { ButtonDifference, Button } from "../../core/kit/Button";
import { Input } from "../../core/kit/Input"
import { iconNames } from 'assets/icons/iconNames';

import GooseLogIn from '../../assets/images/goose-login.png';
import GooseLogIn2x from '../../assets/images/goose-login@2x.png';

// import { Routes } from '';

export const LoginForm = () => {
//   const dispatch = useDispatch();
   
    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
            }}
    //   onSubmit={(values, { resetForm }) => {
    //     dispatch(
    //       login({
    //         email: values.email,
    //         password: values.password,
    //       })
    //     );
    //     resetForm();
    //   }}

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
                <LoginLabel>
                    <Input
                        name="email"
                        type="email"
                        labelTitle="Email"
                        placeholder="Enter your email"
                        // inputStyle={}
                        // labelTextStyle={}
                        handleBlur={handleBlur}
                        onChange={handleChange}
                        value={values.email}
                        error={
                            touched.email && errors.email ? errors.email : ''
                        }
                    /> 
                </LoginLabel>
              
                <LoginLabel>
                    <Input
                        name="password"
                        type="password"
                        labelTitle="Password"
                        placeholder="Enter your password"
                        // labelTextStyle={}
                        // inputStyle={}
                        handleBlur={handleBlur}
                        onChange={handleChange}
                        value={values.password}
                        error={
                            touched.password && errors.password ? errors.password : ''
                        }
                    />
                </LoginLabel>
              
                <Button
                    type="submit"
                    differentStyles={ButtonDifference.primary}
                    // disabled={isValid}
                    title= "Log In"
                    // onClick
                    icon
                    buttonStyle={{backgroundColor: '#3e85f3', 
                        paddingLeft: '10px',
                        width: '287px',
                        height: '46px',
                    }}
                    textStyle
                    iconName={iconNames.loginIcon}
                    iconSize='15'
                >
                </Button>

            </Form>
            {/* <Auth route={Routes.register} content="Sign up" /> */}
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
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.color.authBackgroundColor
}));

const LoginFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

const Form = styled.form`
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

const LoginFormTitle = styled.h1(({ theme }) => ({
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "24px",
    lineHeight: "24px",
    color: theme.color.accentTextColor,
//   textShadow: "0px 47px 355px rgba(0, 0, 0, 0.07)
//     0px 9.4px 57.6875px rgba(0, 0, 0, 0.035)",
    marginBottom: "22px",
}));

const LoginLabel = styled.label(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    marginBotton: "8px",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "12px",
    lineHeight: "15px",
    color: theme.color.accentTextColor,
}));

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
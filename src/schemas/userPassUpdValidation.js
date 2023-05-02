import * as Yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
const userUpdPassSchema = Yup.object().shape({
    currentPassword: Yup.string()
        .min(5, 'Password should contain more then 5 characters')
        .matches(passwordRules, 'errorPassword')
        .required('Required'),
    newPassword: Yup.string()
        .min(5, 'Password should contain more then 5 characters')
        .matches(passwordRules, 'Please, enter stronger passwod')
        .required('Required'),
    confirmPassword: Yup.string()
        .min(5, 'Password should contain more then 5 characters')
        .matches(passwordRules, 'The password does not match')
        .required('Required'),
});

export { userUpdPassSchema };

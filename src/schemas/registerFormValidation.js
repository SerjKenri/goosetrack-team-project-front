import * as Yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Please enter a valid email')
        .required('Required'),
    name: Yup.string().min(2).required('Required'),
    password: Yup.string()
        .min(5)
        .matches(passwordRules, {
            message: 'Please create a stronger password',
        })
        .required('Required'),
});

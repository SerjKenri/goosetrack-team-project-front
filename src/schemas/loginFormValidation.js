import * as yup from 'yup';

export const validationSchema = yup.object().shape({
    email: yup
        .string()
        .email('Email must be valid email')
        .required('Email is a required field'),
    password: yup
        .string()
        .min(8, 'Password must be at least 8 characters')
        .max(16, 'Password must be at most 16 characters')
        .required('Password is a required field'),
});
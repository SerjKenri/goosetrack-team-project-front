import * as Yup from 'yup';

const userForgetPassSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is a required field'),
});

export { userForgetPassSchema };

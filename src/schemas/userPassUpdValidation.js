import * as Yup from 'yup';

// const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
const userUpdPassSchema = Yup.object().shape({
    currentPassword: Yup.string()
        .min(5, 'minLengthPass')
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/, 'errorPassword')
        .required('errorRequired'),
    newPassword: Yup.string()
        .min(5, 'minLengthPass')
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/, 'errorPassword')
        .required('errorRequired'),
    confirmPassword: Yup.string()
        .min(5, 'minLengthPass')
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/, 'errorPassword')
        .required('errorRequired'),
});

export { userUpdPassSchema };
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { signUpUser } from '../../redux/operations';
import { useDispatch } from 'react-redux';

export const useRegisterForm = () => {
    const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

    const { t } = useTranslation();

    const dispatch = useDispatch();

    const onSubmit = values => {
        dispatch(signUpUser(values));
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('errorEmail').required('errorRequired'),
        name: Yup.string().min(2, 'minLengthName').required('errorRequired'),
        password: Yup.string()
            .min(5, 'minLengthPass')
            .matches(passwordRules, 'errorPassword')
            .required('errorRequired'),
    });
    return {
        t,
        onSubmit,
        validationSchema,
    };
};

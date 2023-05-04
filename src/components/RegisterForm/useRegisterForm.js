import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { signUpUser } from '../../redux/operations';
import { useDispatch } from 'react-redux';

export const useRegisterForm = () => {
    const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

    const { t } = useTranslation();

    const dispatch = useDispatch();

    const onSubmit = (values, { resetForm }) => {
        dispatch(signUpUser(values));
        resetForm();
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email(`${t('signUpPage.errorEmail')}`)
            .required(`${t('signUpPage.errorRequired')}`),
        name: Yup.string()
            .min(2, `${t('signUpPage.minLengthName')}`)
            .required(`${t('signUpPage.errorRequired')}`),
        password: Yup.string()
            .min(5, `${t('signUpPage.minLengthPass')}`)
            .matches(passwordRules, `${t('signUpPage.errorPassword')}`)
            .required(`${t('signUpPage.errorRequired')}`),
    });
    return {
        t,
        onSubmit,
        validationSchema,
    };
};

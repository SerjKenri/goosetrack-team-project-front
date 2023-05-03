import * as yup from 'yup';
import { useTranslation } from 'react-i18next';

export const useValidationSchema = () => {
    const { t } = useTranslation();
    const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

    const validationSchema = yup.object().shape({
        email: yup
            .string()
            .email(`${t('signUpPage.errorEmail')}`)
            .required(`${t('signUpPage.errorRequired')}`),
        password: yup
            .string()
            .min(5, `${t('signUpPage.minLengthPass')}`)
            .matches(passwordRules, `${t('signUpPage.errorPassword')}`)
            .required(`${t('signUpPage.errorRequired')}`),
    });
    return {
        validationSchema,
    };
}


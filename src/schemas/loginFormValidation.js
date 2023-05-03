import * as yup from 'yup';
import { useTranslation } from 'react-i18next';

export const useValidationSchema = () => {
    const { t } = useTranslation();
   
    const validationSchema = yup.object().shape({
        email: yup
            .string()
            .email(`${t('signUpPage.errorEmail')}`)
            .required(`${t('signUpPage.errorRequired')}`),
        password: yup
            .string()
            .min(5, `${t('signUpPage.minLengthPass')}`)
            .required(`${t('signUpPage.errorRequired')}`),
    });
    return {
        validationSchema,
    };
}


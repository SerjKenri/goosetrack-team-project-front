import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';

export const useForgetPassSchema = () => {
    const { t } = useTranslation();
    const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
    const passResetSchema = Yup.object().shape({
        newPassword: Yup.string()
            .min(5, `${t('signUpPage.minLengthPass')}`)
            .matches(passwordRules, `${t('signUpPage.errorPassword')}`)
            .required(`${t('signUpPage.errorRequired')}`),
        confirmPassword: Yup.string()
            .min(5, `${t('signUpPage.minLengthPass')}`)
            .matches(passwordRules, `${t('signUpPage.errorPassword')}`)
            .required(`${t('signUpPage.errorRequired')}`),
    });
    return {
        passResetSchema,
    };
};

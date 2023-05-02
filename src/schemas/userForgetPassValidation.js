import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';

export const useForgetPassSchema = () => {
    const { t } = useTranslation();

    const userForgetPassSchema = Yup.object().shape({
        email: Yup.string()
            .email(`${t('signUpPage.errorEmail')}`)
            .required(`${t('userProfilePage.validation.required')}`),
    });
    return {
        userForgetPassSchema,
    };
};

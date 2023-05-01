import * as Yup from 'yup';

import { useTranslation } from 'react-i18next';

// to od add locales for notification
export const useFormValidation = () => {
    const { t } = useTranslation();

    const userFormSchema = Yup.object().shape({
        name: Yup.string()
            .max(16, `${t('userProfilePage.validation.validName')}`)
            .required(`${t('userProfilePage.validation.required')}`),
        email: Yup.string()
            .email(`${t('userProfilePage.validation.validEmail')}`)
            .required(`${t('userProfilePage.validation.required')}`),
        birthday: Yup.date().nullable(),
        phone: Yup.string()
            .matches(
                /^\+380\d{9}$/,
                `${t('userProfilePage.validation.validPhone')}`
            )
            .nullable(),
        telegram: Yup.string()
            .max(16, `${t('userProfilePage.validation.validTelegram')}`)
            .nullable(),
    });
    return {
        userFormSchema,
    };
};

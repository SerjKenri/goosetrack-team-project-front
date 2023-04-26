import * as Yup from 'yup';

// to od add locales for notification
const userFormSchema = Yup.object().shape({
    avatarURL: Yup.mixed().test(
        'fileType',
        'Тип файлу повинен бути зображенням',
        value => {
            if (value) {
                // webp ?? todo
                return ['image/jpeg', 'image/png'].includes(value.type);
            }
            return true;
        }
    ),
    username: Yup.string().max(
        16,
        'Максимальна довжина імені користувача - 16 символів'
    ),
    // .required("Це поле є обов'язковим"),
    email: Yup.string().email('Пошта введена некоректно'),
    // .required("Це поле є обов'язковим"),
    birthday: Yup.date().nullable(),
    phone: Yup.string()
        .matches(
            /^\+380\d{9}$/,
            'Номер телефону повинен бути в форматі +380xxxxxxxxx'
        )
        .nullable(),
    telegram: Yup.string()
        .max(16, 'Максимальна довжина імені користувача Telegram - 16 символів')
        .nullable(),
});

export { userFormSchema };

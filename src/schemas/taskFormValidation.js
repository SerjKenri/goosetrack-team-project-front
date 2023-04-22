import * as yup from 'yup';

const status = {
    TODO: 'to-do',
    IN_PROGRESS: 'in-progress',
    DONE: 'done',
};

const priority = {
    LOW: 'low',
    MEDIUM: 'medium',
    HIGH: 'high',
};

// to od add locales for notification
const taskFormSchema = yup.object().shape({
    title: yup
        .string()
        .max(250, 'Максимальна довжина 250 символів')
        .required("Обов'язково введіть заголовок"),
    start: yup
        .string()
        .matches(/^(?:0?[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/, {
            message: 'Формат часу повинен бути у форматі HH:MM',
        })
        .required("Обов'язково введіть початковий час"),
    end: yup
        .string()
        .matches(/^(?:0?[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/, {
            message: 'Формат часу повинен бути у форматі HH:MM',
        })
        .test(
            'timeCheck',
            'Кінцевий час повинен бути пізніше за початковий час',
            function (value) {
                const { start } = this.parent;
                return !start || !value || start < value;
            }
        )
        .required("Обов'язково введіть кінцевий час"),
    priority: yup
        .string()
        .oneOf(priority, 'Пріоритет повинен бути низький, середній або високий')
        .required("Обов'язково вкажіть пріоритет"),
    date: yup
        .string()
        .matches(/^\d{4}-\d{2}-\d{2}$/, {
            message: 'Формат дати повинен бути у форматі YYYY-MM-DD',
        })
        .required("Обов'язково введіть дату"),
    category: yup
        .string()
        .oneOf(
            status,
            'Категорія повинна бути "to-do", "in-progress" або "done"'
        )
        .required("Обов'язково виберіть категорію"),
});

export { taskFormSchema };

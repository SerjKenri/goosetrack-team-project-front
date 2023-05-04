import * as yup from 'yup';
import { useTranslation } from 'react-i18next';

export const useTaskFormSchema = () => {
    const { t } = useTranslation();

    const STATUS = {
        TODO: 'To-do',
        IN_PROGRESS: 'In-progress',
        DONE: 'Done',
    };
    const PRIORITY = {
        LOW: 'low',
        MEDIUM: 'medium',
        HIGH: 'high',
    };

    const TIME_REGEXP = /^(?:0?[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;

    const taskFormSchema = yup.object().shape({
        title: yup
            .string()
            .max(250, `${t('taskForm.labelTitle')}`)
            .required(`${t('taskForm.errorRequired')}`),
        start: yup
            .string()
            .matches(TIME_REGEXP, {
                message: `${t('taskForm.timeFormat')}`,
            })
            .required(`${t('taskForm.errorRequired')}`),
        end: yup
            .string()
            .matches(TIME_REGEXP, {
                message: `${t('taskForm.timeFormat')}`,
            })
            .test(`${t('taskForm.timeAlert')}`, function (value) {
                const { start } = this.parent;
                return !start || !value || start < value;
            })
            .required(`${t('taskForm.errorRequired')}`),
        priority: yup
            .string()
            .oneOf(Object.values(PRIORITY), `${t('taskForm.priority')}`)
            .required(`${t('taskForm.errorRequired')}`),
        date: yup
            .string()
            .matches(/^\d{4}-\d{2}-\d{2}$/, {
                message: `${t('taskForm.dateFormat')}`,
            })
            .required(`${t('taskForm.errorRequired')}`),
        category: yup
            .string()
            .oneOf(Object.values(STATUS), `${t('taskForm.category')}`),
    });

    return {
        taskFormSchema,
    };
};

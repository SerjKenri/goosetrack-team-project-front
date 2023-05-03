import { iconNames } from 'assets/icons/iconNames';
import { Input } from 'core/kit/Input';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import 'moment/locale/uk';
import { useState } from 'react';
// import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { addTask, updateTask } from 'redux/operations';
import { Button, ButtonDifference } from 'core/kit/Button';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
// import { selectUserId } from 'redux/auth/auth.selectors';

import { Formik } from 'formik';
import { useMatchMedia } from 'core/hooks/useMatchMedia';
import { RadioButton } from 'core/kit/RadioButtons';
// import { taskFormSchema } from 'schemas/taskFormValidation';

import { useLocation } from 'react-router-dom';


const TaskForm = ({ columnId, currentTask, closeModal }) => {
    const {pathname} = useLocation()
    const { t } = useTranslation();
    const { isMobile } = useMatchMedia();
    // const { current } = useParams();
    const dispatch = useDispatch();
    const PRIORITY = ['Low', 'Medium', 'High'];
    // const taskDay = currentTask?.date ? currentTask.date : current;
    // const currentDay = moment(Date.now()).format('YYYY-MM-DD');

        // console.log(pathname.slice(14))

    // const date = pathname.slice(14);
    const date = new Date(pathname.slice(14))
    const currentDay = moment(date).format('YYYY-MM-DD');


    // const userId = useSelector(selectUser)
    const taskCreateTime = currentTask?.start
        ? currentTask?.start
        : moment(Date.now()).format('HH:mm');
    const addMinutes = minutes => Date.now() + minutes * 60 * 1000;
    const defaultEndTime = moment(addMinutes(60)).format('HH:mm');
    const columns = useSelector(state => state.columns.columns.items);

    // const [title, setTitle] = useState(currentTask?.title ?? '');
    // const [start, setStart] = useState(currentTask?.start ?? taskCreateTime);
    // const [end, setEnd] = useState(currentTask?.end ?? defaultEndTime);
    const [priority, setPriority] = useState(currentTask?.priority ?? 'low');

    // const isValidStartTime = (day, time) => {
    //     if (day === currentDay && time >= taskCreateTime) return true;
    //     if (day > currentDay) return true;
    // };
    // const isValidEndTime = start <= end;

    const onSubmit = values => {
        // e.preventDefault();

        if (currentTask) {
            const taskToUpdate = {
                title: values.title,
                start: values.start,
                end: values.end,
                priority,
            };

            dispatch(
                updateTask({
                    operationType: 'updateTask',
                    ...currentTask,
                    ...taskToUpdate,
                })
            );
            closeModal();
            return;
        } else {
            const currentColumn = columns.filter(
                col => col['_id'] === columnId
            );
            const taskToAdd = {
                columnId,
                title: values.title,
                start: values.start,
                end: values.end,
                priority,
                category: currentColumn[0].columnName,
                date: currentDay,
            };
            console.log(taskToAdd);
            dispatch(addTask(taskToAdd));
            closeModal();
            return;
        }
    };

    return (
        <Formik
            initialValues={{
                title: currentTask?.title || '',
                start: currentTask?.start ?? taskCreateTime,
                end: currentTask?.end ?? defaultEndTime,
            }}
            // validationSchema={taskFormSchema}
            onSubmit={onSubmit}
        >
            {formik => (
                <Form onSubmit={formik.handleSubmit} isMobile={isMobile}>
                    <FormTitleInput
                        labelTitle={t('calendarPage.popup.todoName.title')}
                        placeholder={t(
                            'calendarPage.popup.todoName.placeholder'
                        )}
                        name="title"
                        value={formik.values.title}
                        onChange={formik.handleChange}
                        errors={formik.errors}
                        isMobile={isMobile}
                    />
                    <TimeContainer isMobile={isMobile}>
                        <FormInput
                            labelTitle={t('calendarPage.popup.period.start')}
                            type="time"
                            name="start"
                            value={formik.values.start}
                            onChange={formik.handleChange}
                            errors={formik.errors}
                            isMobile={isMobile}
                        />
                        <FormInput
                            labelTitle={t('calendarPage.popup.period.end')}
                            type="time"
                            name="end"
                            value={formik.values.end}
                            onChange={formik.handleChange}
                            errors={formik.errors}
                            isMobile={isMobile}
                        />
                    </TimeContainer>
                    <RadioButtonContainer isMobile={isMobile}>
                        {PRIORITY.map((name, i) => {
                            const sellectedByDefault =
                                PRIORITY[i] === PRIORITY[0];

                            const isSelected = priority
                                ? PRIORITY[i].includes(priority)
                                : sellectedByDefault;

                            return (
                                <PriorityButtonItem key={name}>
                                    {/* <label> */}
                                    <RadioButton
                                        type="radio"
                                        name={name}
                                        value={name}
                                        checked={isSelected}
                                        priority={name}
                                        onChange={e =>
                                            setPriority(e.target.value)
                                        }
                                    />
                                    {/* </label> */}
                                </PriorityButtonItem>
                            );
                        })}
                    </RadioButtonContainer>

                    <ButtonGroupContainer>
                        {!currentTask ? (
                            <>
                                <AddButton
                                    differentStyles={ButtonDifference.secondary}
                                    iconSize={'20px'}
                                    iconName={iconNames.plus}
                                    type="submit"
                                    title={t('calendarPage.popup.actions.add')}
                                />
                                <CancelButton
                                    differentStyles={ButtonDifference.cancel}
                                    type="button"
                                    onClick={closeModal}
                                    title={t(
                                        'calendarPage.popup.actions.cancel'
                                    )}
                                    isMobile={isMobile}
                                />
                            </>
                        ) : (
                            <EditButton
                                differentStyles={ButtonDifference.secondary}
                                iconSize={'20px'}
                                iconName={iconNames.pencil}
                                type="submit"
                                title={t('calendarPage.popup.actions.edit')}
                            />
                        )}
                    </ButtonGroupContainer>
                </Form>
            )}
        </Formik>
    );
};

export { TaskForm };

const Form = styled.form(({ theme, isMobile }) => ({
    outline: '2px solid red',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    textTransform: 'capitalize',
    padding: isMobile ? '48px 18px 40px 18px' : '40px 28px 40px 28px',
}));

const FormTitleInput = styled(Input).attrs(({ theme, isMobile }) => ({
    inputStyle: {
        outline: 'none',
        border: 'none',
        backgroundColor: theme.color.popUpInputBackgroundColor,
        width: isMobile ? '267px' : '340px',
        height: isMobile ? '42px' : '46px',
        lineHeight: '1.3',
        color: theme.color.mainTextColor,
        borderRadius: '8px',
        padding: isMobile ? '12px 15px 12px 15px' : '14px 18px 14px 18px',
        marginBottom: isMobile ? '16px' : '18px',
    },
    labelTextStyle: {
        fontSize: '12px',
        lineHeight: '1.16',
        fontWeight: '500',
        marginBottom: '8px',
    },
}))({});

const TimeContainer = styled.div(({ theme, isMobile }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: isMobile ? '16px' : '28px',
    '&:firstChild': {
        marginRight: '14px',
    },
}));

const FormInput = styled(Input).attrs(({ theme, isMobile }) => ({
    inputStyle: {
        outline: 'none',
        border: 'none',
        backgroundColor: theme.color.popUpInputBackgroundColor,
        width: isMobile ? '126px' : '163px',
        height: isMobile ? '42px' : '46px',
        lineHeight: '1.3',
        color: theme.color.mainTextColor,
        borderRadius: '8px',
        padding: isMobile ? '12px 14px 12px 14px' : '14px 18px 14px 18px',
    },
    labelTextStyle: {
        fontSize: '12px',
        lineHeight: '1.16',
        fontWeight: '500',
        marginBottom: '8px',
        color: theme.color.inputFieldTextColor,
    },
}))({});

const RadioButtonContainer = styled.ul(({ theme }) => ({
    display: 'flex',
    width: '100%',
    justifyContent: 'start',
    marginBottom: '32px',
}));

const PriorityButtonItem = styled.li(({ theme }) => ({
    display: 'flex',
    marginRight: '16px',
    textTransform: 'capitalized',
}));

const ButtonGroupContainer = styled.div({
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
});

const AddButton = styled(Button).attrs(({ theme, isMobile }) => ({
    buttonStyle: {
        textTransform: 'capitalize',
        fontSize: '14px',
        lineHeight: '1.28',
        fontWeight: '600',
        width: !isMobile ? '182px' : '135px',
        height: !isMobile ? '48px' : '42px',
    },
}))({});

const CancelButton = styled(Button).attrs(({ theme, isMobile }) => ({
    buttonStyle: {
        textTransform: 'capitalize',
        fontSize: '14px',
        lineHeight: '1.28',
        fontWeight: '600',
        width: !isMobile ? '144px' : '118px',
        height: !isMobile ? '48px' : '42px',
    },
}))({});

const EditButton = styled(Button).attrs(({ theme, isMobile }) => ({
    buttonStyle: {
        width: '100%',
        textTransform: 'capitalize',
        fontSize: '14px',
        lineHeight: '1.28',
        fontWeight: '600',
        // width: !isMobile ? '340px' : '118px',
        height: !isMobile ? '48px' : '42px',
    },
}))({});

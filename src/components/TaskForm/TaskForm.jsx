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
import { useLocation } from 'react-router-dom';
import { useTaskFormSchema } from 'schemas/taskFormValidation';
// import { useMatchMedia } from 'core/hooks/useMatchMedia';

const TaskForm = ({ columnId, currentTask, closeModal }) => {
    const { pathname } = useLocation();
    const { t } = useTranslation();
    const { taskFormSchema } = useTaskFormSchema();
    // const { current } = useParams();
    const dispatch = useDispatch();
    const PRIORITY = ['low', 'medium', 'high'];
    // const taskDay = currentTask?.date ? currentTask.date : current;
    // const currentDay = moment(Date.now()).format('YYYY-MM-DD');

    // console.log(pathname.slice(14))

    // const date = pathname.slice(14);
    const date = new Date(pathname.slice(14));
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
            validationSchema={taskFormSchema}
            onSubmit={onSubmit}
        >
            {formik => (
                <Form onSubmit={formik.handleSubmit}>
                    <FormTitleInput
                        labelTitle={t('calendarPage.popup.todoName.title')}
                        placeholder={t(
                            'calendarPage.popup.todoName.placeholder'
                        )}
                        name="title"
                        value={formik.values.title}
                        onChange={formik.handleChange}
                        errors={formik.errors}
                    />
                    <TimeContainer>
                        <FormInput
                            labelTitle={t('calendarPage.popup.period.start')}
                            type="time"
                            name="start"
                            value={formik.values.start}
                            onChange={formik.handleChange}
                            errors={formik.errors}
                        />
                        <FormInput
                            labelTitle={t('calendarPage.popup.period.end')}
                            type="time"
                            name="end"
                            value={formik.values.end}
                            onChange={formik.handleChange}
                            errors={formik.errors}
                        />
                    </TimeContainer>
                    <PriorityButtonContainer>
                        {PRIORITY.map((name, i) => {
                            const sellectedByDefault =
                                PRIORITY[i] === PRIORITY[0];

                            const isSelected = priority
                                ? PRIORITY[i].includes(priority)
                                : sellectedByDefault;

                            return (
                                <PriorityButtonItem key={name}>
                                    <ItemLabel>
                                        {name}
                                        <RadioInput
                                            type="radio"
                                            // name={name}
                                            value={name}
                                            checked={isSelected}
                                            onChange={e =>
                                                setPriority(e.target.value)
                                            }
                                        />
                                    </ItemLabel>
                                </PriorityButtonItem>
                            );
                        })}
                    </PriorityButtonContainer>
                    <ButtonGroupContainer>
                        <TaskFormBtn
                            iconSize={'20px'}
                            iconName={
                                currentTask ? iconNames.pencil : iconNames.plus
                            }
                            type="submit"
                            title={
                                currentTask
                                    ? t('calendarPage.popup.actions.edit')
                                    : t('calendarPage.popup.actions.add')
                            }
                        />

                        <Button
                            differentStyles={ButtonDifference.cancel}
                            type="button"
                            onClick={closeModal}
                            title={t('calendarPage.popup.actions.cancel')}
                        />
                    </ButtonGroupContainer>
                </Form>
            )}
        </Formik>
    );
};

export { TaskForm };

const Form = styled.form(({ theme, isMobile, isDesktop }) => ({
    // outline: '2px solid red',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: theme.color.mainBackgroundColor,
    padding: isMobile ? '48px 18px 40px 18px' : '40px 28px 40px 28px',
    // paddingTop: '48px',
    // paddingBottom: '40px',
    // paddingLeft: '18px',
    // paddingRight: '18px',
    width: '303px',
    height: '336px',
    textTransform: 'capitalize',
    borderRadius: '8px',
    // border: '1px solid rgba(220, 227, 229, 0.8)',
    // boxShadow: '0px 4px 16px rgba(17, 17, 17, 0.1)',
    [theme.media.up(
        `${theme.breakpoints.m}px`
        // `${theme.breakpoints.l}px`
    )]: {
        width: '396px',
        height: '360px',
        paddingTop: '40px',
    },
    // [theme.media.up(`${theme.breakpoints.l}px`)]: {
    //     width: '1087px',
    //     height: '752px',
    //     paddingTop: '60px',
    //     paddingBottom: '60px',
    // },
}));

const FormTitleInput = styled(Input).attrs(
    ({ theme, isMobile, errors, touched }) => ({
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
        // placeholder: {
        //     fontSize: '14px',
        //     lineHeight: '1.28',
        //     fontWeight: '600',
        // },
    })
)({});

const TimeContainer = styled.div(({ theme, isMobile }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: isMobile ? '16px' : '28px',
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
        // &:not(:last-child) { marginRight: '14px' },

        marginRight: '14px',
        marginBottom: isMobile ? '16px' : '28px',
    },
    labelTextStyle: {
        fontSize: '12px',
        lineHeight: '1.16',
        fontWeight: '500',
        marginBottom: '8px',
    },
}))({});

const PriorityButtonContainer = styled.ul(({ theme }) => ({
    display: 'flex',
    width: '100%',
    justifyContent: 'start',
    marginBottom: '32px',
}));

const PriorityButtonItem = styled.li(({ theme, isMobile, isDesktop }) => ({
    display: 'flex',
    marginRight: '16px',

    marginBottom: isMobile ? '16px' : '28px',
}));

const ItemLabel = styled.label(({ theme, isMobile, isDesktop }) => ({
    display: 'flex',
    flexDirection: 'row-reverse',

    // marginBottom: isMobile ? '16px' : '28px',
}));

const RadioInput = styled.input(({ theme, isMobile, isDesktop }) => ({
    marginRight: '6px',
    backgroundColor: theme.color.taskLowColor,
}));

const ButtonGroupContainer = styled.div({
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignContent: 'stretch',
    // alignItems: 'center',
});

const TaskFormBtn = styled(Button).attrs(
    ({ theme, isMobile, errors, touched }) => ({
        textTransform: 'capitalize',
        fontSize: '14px',
        lineHeight: '1.28',
        fontWeight: '600',
        marginRight: '14px',
        width: '100%',
    })
)({});

/////////////////////////////////////////////////////////////////

// const InputWrapper = styled.div(({ theme, isMobile, isDesktop }) => ({
//     display: 'flex',
//     alignItems: 'center',
//     flexWrap: 'wrap',
//     flexDirection: 'column',
//     gap: isMobile ? '18px' : '24px',
//     marginBottom: !isDesktop ? '40px' : '88px',
//     width: !isDesktop ? '299px' : '758px',
//     height: isDesktop && '264px',
// }));

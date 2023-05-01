import { iconNames } from 'assets/icons/iconNames';
import { Input } from 'core/kit/Input';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import 'moment/locale/uk';
import { useState } from 'react';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { addTask, updateTask } from 'redux/operations';
import { Button, ButtonDifference } from 'core/kit/Button';
import styled from 'styled-components';

const TaskForm = ({ currentTask, closeModal }) => {
    const { t } = useTranslation();
    const { current } = useParams();
    const dispatch = useDispatch();
    const PRIORITY = ['low', 'medium', 'high'];
    const taskDay = currentTask?.date ? currentTask.date : current;
    const currentDay = moment(Date.now()).format('YYYY-MM-DD');

    const taskCreateTime = currentTask?.start
        ? currentTask?.start
        : moment(Date.now()).format('HH:mm');
    const addMinutes = minutes => Date.now() + minutes * 60 * 1000;
    const defaultEndTime = moment(addMinutes(60)).format('HH:mm');

    const [title, setTitle] = useState(currentTask?.title ?? '');
    const [start, setStart] = useState(currentTask?.start ?? taskCreateTime);
    const [end, setEnd] = useState(currentTask?.end ?? defaultEndTime);
    const [priority, setPriority] = useState(currentTask?.priority ?? 'low');

    const isValidStartTime = (day, time) => {
        if (day === currentDay && time >= taskCreateTime) return true;
        if (day > currentDay) return true;
    };
    const isValidEndTime = start <= end;

    const onSubmit = e => {
        e.preventDefault();
        const taskToUpdate = { title, start, end, priority };
        if (currentTask) {
            dispatch(updateTask({ ...currentTask, ...taskToUpdate }));
            closeModal();
            return;
        } else {
            const taskToAdd = {
                title,
                start,
                end,
                priority,
                category: 'toDo',
                date: currentDay,
            };

            dispatch(addTask(taskToAdd));
            closeModal();
            return;
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <Input
                labelTitle={t('calendarPage.popup.todoName.title')}
                placeholder={t('calendarPage.popup.todoName.placeholder')}
                name="title"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <div>
                <Input
                    labelTitle={t('calendarPage.popup.period.start')}
                    type="time"
                    value={start}
                    onChange={e => setStart(e.target.value)}
                />
                <Input
                    labelTitle={t('calendarPage.popup.period.end')}
                    type="time"
                    value={end}
                    onChange={e => setEnd(e.target.value)}
                />
            </div>
            <ul>
                {PRIORITY.map((name, i) => {
                    const sellectedByDefault = PRIORITY[i] === PRIORITY[0];

                    const isSelected = priority
                        ? PRIORITY[i].includes(priority)
                        : sellectedByDefault;

                    return (
                        <li key={name}>
                            <label>
                                {name}
                                <input
                                    type="radio"
                                    value={name}
                                    checked={isSelected}
                                    onChange={e => setPriority(e.target.value)}
                                />
                            </label>
                        </li>
                    );
                })}
            </ul>
            <ButtonGroup>
                <Button
                    iconSize={'20px'}
                    iconName={currentTask ? iconNames.pencil : iconNames.plus}
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
            </ButtonGroup>
        </form>
    );
};

export { TaskForm };

const ButtonGroup = styled.div({
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
});

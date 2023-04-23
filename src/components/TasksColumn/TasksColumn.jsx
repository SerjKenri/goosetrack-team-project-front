import { AddTaskBtn } from 'components/AddTaskBtn/AddTaskBtn';
import { ColumnHeadBar } from 'components/ColumnHeadBar/ColumnHeadBar';
import { ColumnsTasksList } from 'components/ColumnsTasksList/ColumnsTasksList';
import styled from 'styled-components';
// import styled from 'styled-components';

const TasksColumn = ({ title, tasksCollection }) => {
    // console.log(title, tasksCollection);
    return (
        <TaskColumn>
            <ColumnHeadBar
                title={title}
                onClick={() => console.log('create to do')}
            />
            <ColumnsTasksList tasks={tasksCollection} />
            <AddTaskBtn onClick={() => console.log('create to do')} />
        </TaskColumn>
    );
};

export { TasksColumn };

const TaskColumn = styled.div(({ theme }) => ({
    display: 'grid',
    gridTemplateRows: `${theme.space.x9}px minmax(0, max-content)`,
    padding: `${theme.space.x7}px ${theme.space.x5}px ${theme.space.x3}px`,
    gap: `${theme.space.x4}px`,
    alignSelf: 'self-start',
    backgroundColor: theme.color.columnBackGroundColor,
    border: '1px solid ' + theme.color.modalBorder,
    borderRadius: theme.space.x2,

    [theme.media.between(
        theme.breakpoints.s + 'px',
        theme.breakpoints.m + 'px'
    )]: {
        gridTemplateRows: `${theme.space.x10}px minmax(0, max-content)
 ${theme.space.x10}px`,
        gap: theme.space.x5,
    },

    [theme.media.up(theme.breakpoints.m + 'px')]: {
        gridTemplateRows: `${theme.space.x13}px minmax(0, max-content)
 ${theme.space.x13}px`,
        padding: `${theme.space.x7}px ${theme.space.x6}px`,
        gap: theme.space.x7,
    },
}));

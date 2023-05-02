import React, { useState } from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

import { ColumnHeadBar } from 'components/ColumnHeadBar/ColumnHeadBar';
import { AddTaskBtn } from 'components/AddTaskBtn/AddTaskBtn';
import {ColumnsTasksList} from 'components/ColumnsTasksList/ColumnsTasksList';
import { TaskModal } from 'components/TaskModal/TaskModal';

const TasksColumn = props => {
    const title = props.title;
    const tasks = props.tasks;
    const index = props.index;
    // console.log(props);
    const [isShow, setIsShow] = useState(false);

    const handleCloseModal = () => {
        setIsShow(false);
    };
// console.log('props',props);
    // index here
    return (
        <Draggable draggableId={props.columnId} index={index}>
            {(provided, snapshot) => (
                <TaskColumn
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                >
                    <ColumnHeadBar
                        onClick={() => setIsShow(true)}
                        isDragging={snapshot.isDragging}
                        {...provided.dragHandleProps}
                        title={title}
                    />
                    <ColumnsTasksList
                        listId={title}
                        listType="TASK"
                        tasks={tasks}
                        internalScroll={props.isScrollable}
                        isCombineEnabled={Boolean(props.isCombineEnabled)}
                        useClone={Boolean(props.useClone)}
                    />
                    <AddTaskBtn onClick={() => setIsShow(true)} />
                    <TaskModal
                        columnId={props.columnId}
                        isShow={isShow}
                        closeModal={handleCloseModal}
                    />
                </TaskColumn>
            )}
        </Draggable>
    );
};

export default TasksColumn;

const TaskColumn = styled.li(({ theme }) => ({
    minWidth: '340px',
    width: '100%',
    display: 'grid',
    gridTemplateRows: `${theme.space.x9}px minmax(0, max-content) ${theme.space.x9}px`,
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

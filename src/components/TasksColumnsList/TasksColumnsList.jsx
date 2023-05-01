import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { reorder, reorderedTasksMap } from './utils';
import TasksColumn from 'components/TasksColumn/TasksColumn';
import { useDispatch } from 'react-redux';
import { updateColumns, updateTask } from 'redux/operations';

// TasksColumnsList = board
const TasksColumnsList = ({
    isCombineEnabled,
    tasks,
    initialColumns,
    useClone,
    containerHeight,
    withScrollableColumns,
}) => {
    const [columns, setColumns] = useState(null);
    const [ordered, setOrdered] = useState([]);
    // console.log('columns', columns);
    // console.log('ordered', ordered);
    const dispatch = useDispatch();
    const height = window.innerHeight * 0.7;
    // console.log(columns);
    useEffect(() => {
        // const uniqColumns = tasks.map(task => task.category);
        // const defaultColumns = ['toDo', 'inProgress', 'done'];

        // const allColumns = [...defaultColumns, ...uniqColumns].filter(
        //     (task, i, array) => array.indexOf(task) === i
        // );

        const columns = {};
        initialColumns
            .map(column => column.columnName)
            .forEach(col => {
                columns[col] = [];
            });

        tasks.forEach(task => {
            columns[task.category].push(task);
        });

        function reorderArray(arr) {
            const reorderedArr = new Array(arr.length);
            for (let i = 0; i < arr.length; i++) {
                reorderedArr[arr[i].position - 1] = arr[i];
            }
            // console.log('reorderedArr', reorderedArr);
            return reorderedArr;
        }
        setColumns(columns);
        setOrdered([...reorderArray(initialColumns)]); // set uniq columns
    }, []);

    const onDragEnd = result => {
        if (result.combine) {
            if (result.type === 'COLUMN') {
                const shallow = [...ordered];
                shallow.splice(result.source.index, 1);
                setOrdered(shallow);
                return;
            }

            const column = columns[result.source.droppableId];
            const withQuoteRemoved = [...column];

            withQuoteRemoved.splice(result.source.index, 1);

            const orderedColumns = {
                ...columns,
                [result.source.droppableId]: withQuoteRemoved,
            };
            setColumns(orderedColumns);
            return;
        }

        // dropped nowhere
        if (!result.destination) {
            return;
        }

        const source = result.source;
        const destination = result.destination;

        // did not move anywhere - can bail early
        if (
            source.droppableId === destination.droppableId &&
            source.index === destination.index
        ) {
            return;
        }

        // reordering column
        if (result.type === 'COLUMN') {
            const taskToReplace = ordered[result.destination.index];

            dispatch(
                updateColumns({
                    operationType: 'replaceColumn',
                    source: {
                        id: result.draggableId,
                        position: result.source.index + 1,
                    },
                    destination: {
                        id: taskToReplace._id,
                        position: result.destination.index + 1,
                    },
                })
            );
            const reordered = reorder(ordered, source.index, destination.index);

            setOrdered(reordered);

            return;
        }
        // same columns
        if (source.droppableId === destination.droppableId) {
            const sourceId = result.draggableId;
            const destinationId =
                columns[source.droppableId][result.destination.index]['_id'];

            dispatch(
                updateTask({
                    operationType: 'replaceTask',
                    source: {
                        id: sourceId,
                        position: result.source.index + 1,
                    },
                    destination: {
                        id: destinationId,
                        position: result.destination.index + 1,
                    },
                })
            );
            const data = reorderedTasksMap({
                tasksMap: columns,
                source,
                destination,
            });

            setColumns(data.tasksMap);
            return;
        }

        const sourceId = result.draggableId;
        const destinationId = columns[destination.droppableId][
            result.destination.index
        ]?._id
            ? columns[destination.droppableId][result.destination.index]?._id
            : null;

        dispatch(
            updateTask({
                operationType: 'replaceColumnsTask',
                source: {
                    id: sourceId,
                    position: result.source.index + 1,
                },
                destination: {
                    id: destinationId,
                    position: result.destination.index + 1,
                },
            })
        );

        const data = reorderedTasksMap({
            tasksMap: columns,
            source,
            destination,
        });

        setColumns(data.tasksMap);
    };

    return (
        ordered.length > 0 &&
        columns && (
            <>
                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable
                        droppableId="board"
                        type="COLUMN"
                        direction="horizontal"
                        ignoreContainerClipping={Boolean(containerHeight)}
                        isCombineEnabled={isCombineEnabled}
                    >
                        {provided => (
                            <TasksColumnsListContainer
                                innerHeight={height}
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                            >
                                {ordered.map((column, index) => {
                                    // console.log('column', column);
                                    // console.log(
                                    //     'columns[column.columnName]',
                                    //     columns[column.columnName]
                                    // );
                                    // console.log(columns);
                                    // console.log('column', column);
                                    return (
                                        <TasksColumn
                                            key={column._id}
                                            index={index}
                                            columnId={column._id}
                                            title={column.columnName}
                                            tasks={columns[column.columnName]}
                                            isScrollable={withScrollableColumns}
                                            isCombineEnabled={isCombineEnabled}
                                            useClone={useClone}
                                        />
                                    );
                                })}
                                {provided.placeholder}
                            </TasksColumnsListContainer>
                        )}
                    </Droppable>
                </DragDropContext>
            </>
        )
    );
};

TasksColumnsList.defaultProps = {
    isCombineEnabled: false,
};

TasksColumnsList.propTypes = {
    isCombineEnabled: PropTypes.bool,
};

export default TasksColumnsList;

const TasksColumnsListContainer = styled.ul(({ theme }) => ({
    width: '340px',
    height: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit,335px)',
    gridAutoFlow: 'column',
    gridAutoColumns: 'max-content',
    gap: theme.space.x4,
    overflowY: 'auto',

    '&::-webkit-scrollbar': {
        width: '8px',
        borderRadius: '8px',
        backgroundColor: theme.color.scrollbarBackgroundColor,
    },
    '&::-webkit-scrollbar-thumb': {
        borderRadius: '8px',
        backgroundColor: theme.color.scrollbarColor,
    },

    [theme.media.between(
        theme.breakpoints.m + 'px',
        theme.breakpoints.l + 'px'
    )]: {
        width: '720px',
        gridTemplateColumns: 'repeat(auto-fit,344px)',
        gap: theme.space.x5,
    },

    [theme.media.up(theme.breakpoints.l + 'px')]: {
        width: '1080px',
        gridTemplateColumns: 'repeat(auto-fit,344px)',
        gap: theme.space.x7,
    },
}));

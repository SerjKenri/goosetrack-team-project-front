import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import TasksColumn from 'components/TasksColumn/TasksColumn';
import { useDispatch } from 'react-redux';
import {
    fetchColumns,
    fetchTasks,
    updateColumns,
    updateTask,
} from 'redux/operations';
import { useSelector } from 'react-redux';
import { Loader } from 'components/Loader/Loader';

// <TasksColumnsList
//     currentDate={{ year: '2023', month: '05' }} // u should use date here
//     tasks={tasks}
//     withScrollableColumns
// />;
// TasksColumnsList = board
const TasksColumnsList = ({
    currentDate,
    isCombineEnabled,
    tasks,
    useClone,
    containerHeight,
    withScrollableColumns,
}) => {
    const [columns, setColumns] = useState(null);
    const [ordered, setOrdered] = useState([]);
    const [isReadyRender, setIsreadyRender] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const height = window.innerHeight * 0.7;
    const initialColumns = useSelector(state => state.columns.columns.items);

    useEffect(() => {
        dispatch(fetchColumns());
        // console.log(isReadyRender);
    }, [dispatch]);

    useEffect(() => {
        // console.log('hello');

        const columns = initialColumns
            .map(column => column.columnName)
            .reduce((acc, col) => {
                acc[col] = [];
                return acc;
            }, {});

        tasks.forEach(task => {
            const columnName = initialColumns.find(
                column => column?._id === task.columnId
            )?.columnName;

            if (columnName) {
                columns[columnName].push(task);
            }
        });
        // console.log(ordered);
        function reorderArray(arr) {
            const reorderedArr = new Array(arr.length);
            for (let i = 0; i < arr.length; i++) {
                reorderedArr[arr[i].position] = arr[i];
            }
            // console.log('reorderedArr', reorderedArr);
            return reorderedArr;
        }
        setColumns(columns);
        setOrdered(reorderArray(initialColumns)); // set uniq columns
        // console.log('there');
        setIsreadyRender(true);
    }, [initialColumns, tasks, isReadyRender]);

    const onDragEnd = async result => {
        setIsLoading(true);
        setIsreadyRender(false);
        const columnDestinationId = ordered.filter(
            el => el.columnName === result.destination.droppableId
        )[0]?._id;
        const columnSourceId = ordered.filter(
            el => el.columnName === result.source.droppableId
        )[0]?._id;

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
            // console.log('column', ordered);
            // console.log('source', source.index);
            // console.log('destination', destination.index);
            await dispatch(
                updateColumns({
                    operationType: 'replaceColumn',
                    source: {
                        id: result.draggableId,
                        position: result.source.index,
                    },
                    destination: {
                        id: taskToReplace._id,
                        position: result.destination.index,
                    },
                })
            );
            await dispatch(fetchColumns());
            await dispatch(fetchTasks(currentDate));
            // const reordered = reorder(ordered, source.index, destination.index);

            // setOrdered(reordered);

            return;
        }
        // same columns
        if (source.droppableId === destination.droppableId) {
            const sourceId = result.draggableId;
            const destinationId =
                columns[source.droppableId][result.destination.index]['_id'];

            // const data = reorderedTasksMap({
            //     tasksMap: columns,
            //     source,
            //     destination,
            // });

            // setColumns(data.tasksMap);

            await dispatch(
                updateTask({
                    operationType: 'replaceTask',
                    _id: sourceId,
                    source: {
                        id: sourceId,
                        position: result.source.index,
                    },
                    destination: {
                        id: destinationId,
                        position: result.destination.index,
                    },
                })
            );
            await dispatch(fetchColumns());
            await dispatch(fetchTasks(currentDate));
            setIsreadyRender(true);

            return;
        }

        const sourceId = result.draggableId;
        const destinationId = columns[destination.droppableId][
            result.destination.index
        ]?._id
            ? columns[destination.droppableId][result.destination.index]?._id
            : null;

        await dispatch(
            updateTask({
                operationType: 'replaceColumnsTask',
                _id: sourceId,
                source: {
                    id: sourceId,
                    position: result.source.index,
                    columnId: columnSourceId,
                },
                destination: {
                    id: destinationId,
                    position: result.destination.index,
                    columnId: columnDestinationId,
                },
            })
        );
        await dispatch(fetchColumns());
        await dispatch(fetchTasks(currentDate));

        // const data = reorderedTasksMap({
        //     tasksMap: columns,
        //     source,
        //     destination,
        // });
        // setColumns(data.tasksMap);

        setIsLoading(false);
        setIsreadyRender(true);
    };

    return (
        isReadyRender && (
            <>
                {isLoading && (
                    <Backdrop>
                        <Loader />
                    </Backdrop>
                )}
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
                                {ordered.map(column => {
                                    return (
                                        <TasksColumn
                                            key={column?._id}
                                            index={column?.position}
                                            columnId={column?._id}
                                            title={column.columnName}
                                            tasks={columns[
                                                column.columnName
                                            ].sort((a, b) => {
                                                return a.position - b.position;
                                            })}
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

const Backdrop = styled.div({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    opacity: 1,
    transform: 'scale(1)',
    /* transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1), transform 250ms cubic-bezier(0.4, 0, 0.2, 1), */
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

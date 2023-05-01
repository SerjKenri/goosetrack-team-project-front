import React from 'react';
import styled from 'styled-components';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import TaskColumnCard from 'components/TaskColumnCard/TaskColumnCard';

const InnerQuoteList = React.memo(function InnerQuoteList({ tasks }) {

    return tasks.map((task, index) => (
        <Draggable key={task._id} draggableId={task._id} index={index}>
            {(dragProvided, dragSnapshot) => (
                <TaskColumnCard
                    key={task._id}
                    task={task}
                    isDragging={dragSnapshot.isDragging}
                    isGroupedOver={Boolean(dragSnapshot.combineTargetFor)}
                    provided={dragProvided}
                />
            )}
        </Draggable>
    ));
});

function InnerList({ tasks, dropProvided }) {
    return (
        <>
            <DropZone ref={dropProvided.innerRef}>
                <InnerQuoteList tasks={tasks} />
                {dropProvided.placeholder}
            </DropZone>
        </>
    );
}

export function ColumnsTasksList({
    ignoreContainerClipping,
    internalScroll,
    scrollContainerStyle,
    isDropDisabled,
    isCombineEnabled,
    listId ,
    listType,
    tasks,
    title,
    useClone,
}) {
    const height = window.innerHeight * 0.4;

    return (
        <Droppable
            droppableId={listId}
            type={listType}
            ignoreContainerClipping={ignoreContainerClipping}
            isDropDisabled={isDropDisabled}
            isCombineEnabled={isCombineEnabled}
            renderClone={
                useClone
                    ? (provided, snapshot, descriptor) => (
                          <TaskColumnCard
                              task={tasks[descriptor.source.index]}
                              provided={provided}
                              isDragging={snapshot.isDragging}
                              isClone
                          />
                      )
                    : null
            }
        >
            {(dropProvided, dropSnapshot) => (
                <Wrapper
                    isDraggingOver={dropSnapshot.isDraggingOver}
                    isDropDisabled={isDropDisabled}
                    isDraggingFrom={Boolean(dropSnapshot.draggingFromThisWith)}
                    {...dropProvided.droppableProps}
                >
                    {internalScroll ? (
                        <ScrollContainer
                            innerHeight={height}
                            style={scrollContainerStyle}
                        >
                            <InnerList
                                tasks={tasks}
                                title={title}
                                dropProvided={dropProvided}
                            />
                        </ScrollContainer>
                    ) : (
                        <InnerList
                            tasks={tasks}
                            title={title}
                            dropProvided={dropProvided}
                        />
                    )}
                </Wrapper>
            )}
        </Droppable>
    );
}

const Wrapper = styled.div(
    ({ theme, isDraggingOver, isDraggingFrom, isDropDisabled }) => ({
        backgroundColor: isDraggingOver
            ? theme.color.accentColor + '96'
            : isDraggingFrom
            ? theme.color.accentColor + '3b'
            : 'transparent',
        display: 'flex',
        flexDirection: 'column',
        opacity: isDropDisabled ? 0.5 : 'inherit',
        padding: '6px',
        borderRadius: theme.space.x2 + 'px',
        paddingBottom: 0,
        transition: 'background-color 200ms ease, opacity 0.1s ease',
        userSelect: 'none',
    })
);

const DropZone = styled.div(({ theme }) => ({
    minHeight: '10px',
    backgroundColor: 'transparent',
    paddingBottom: '8px',
    display: 'grid',
    gap: theme.space.x2 + 'px',
}));

const ScrollContainer = styled.div(({ theme, innerHeight }) => ({
    width: '100%',
    maxHeight: innerHeight + 'px',
    overflowY: 'auto',
    paddingRight: theme.space.x2 + 'px',
    
    '&::-webkit-scrollbar': {
        width: '8px',
        borderRadius: '8px',
        backgroundColor: theme.color.scrollbarBackgroundColor,
    },
    '&::-webkit-scrollbar-thumb': {
        borderRadius: '8px',
        backgroundColor: theme.color.scrollbarColor,
    },
}));

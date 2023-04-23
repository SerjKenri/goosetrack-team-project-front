import { TaskColumnCard } from 'components/TaskColumnCard/TaskColumnCard';
import propTypes from 'prop-types';
import { useState } from 'react';
import styled from 'styled-components';

const ColumnsTasksList = ({ tasks }) => {
    const height = window.innerHeight * 0.7;
    const [currentTasks, setTasks] = useState(tasks)

    return (
        <ScrollContainer innerHeight={height}>
            <TasksWrapper>
                {currentTasks.map((task, i) => {
                    return <TaskColumnCard key={task + i} task={task} />;
                })}
            </TasksWrapper>
        </ScrollContainer>
    );
};

export { ColumnsTasksList };

ColumnsTasksList.propTypes = {
    tasks: propTypes.arrayOf(
        propTypes.shape({
            // text: propTypes.string,
            // userURL: propTypes.string,
            // priority: propTypes.string,
        })
    ),
};

const ScrollContainer = styled.div(({ innerHeight }) => ({
    maxHeight: innerHeight + 'px',
    overflowY: 'auto',
}));

const TasksWrapper = styled.div(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.space.x5,
}));

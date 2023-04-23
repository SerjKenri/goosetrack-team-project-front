import { TasksColumn } from 'components/TasksColumn/TasksColumn';
import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

const TasksColumnsList = ({ tasks }) => {
    const [columns, setColumns] = useState([]);
    useEffect(() => {
        const columns = tasks
            .map(task => task.status)
            .filter((task, i, array) => array.indexOf(task) === i);
        setColumns([...columns]);
    }, [tasks]);

    const recognizeTasksByStatus = useCallback(
        status => {
            return tasks.filter(task => task.status === status);
        },
        [tasks]
    );

    return (
        <div
            style={{
                // width: 'max-content',
                // display: 'flex',
                // overflow: 'auto',
                // flexDirection: 'column',
                // flexWrap: 'nowrap',
            }}
        >
            <TasksColumnsListContainer>
                {columns.length > 0 &&
                    columns.map(column => {
                        return (
                            <TasksColumn
                                key={column}
                                title={column}
                                tasksCollection={recognizeTasksByStatus(column)}
                            />
                        );
                    })}
            </TasksColumnsListContainer>
        </div>
    );
};

export { TasksColumnsList };

const TasksColumnsListContainer = styled.div(({ theme }) => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit,335px)',
    gridAutoFlow: 'column',
    gap: theme.space.x4,

    [theme.media.up(theme.breakpoints.s + 'px')]: {
        gridTemplateColumns: 'repeat(auto-fit,344px)',
        gap: theme.space.x5,
    },

    [theme.media.up(theme.breakpoints.m + 'px')]: {
        gridTemplateColumns: 'repeat(auto-fit,344px)',
        gap: theme.space.x7,
    },
}));

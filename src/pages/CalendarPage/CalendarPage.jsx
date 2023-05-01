import TasksColumnsList from "components/TasksColumnsList/TasksColumnsList";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchColumns, fetchTasks } from "redux/operations";
import { selectTasks } from "redux/tasks/tasks.selectors";

const CalendarPage = () => {
    const dispatch = useDispatch()
    const tasks = useSelector(selectTasks)
    const columns = useSelector(state=>state.columns.columns.items)
    useEffect(() => {
        dispatch(fetchTasks({ year: '2023', month: '05' }));
        dispatch(fetchColumns());
    }, [dispatch]);

    return columns.length > 0 && tasks.length > 0 && (
        <>
            <TasksColumnsList
                initialColumns={columns}
                tasks={tasks}
                withScrollableColumns
            />
        </>
    );
};
export default CalendarPage;

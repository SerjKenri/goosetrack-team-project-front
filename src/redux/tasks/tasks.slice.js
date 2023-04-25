import { createSlice } from '@reduxjs/toolkit';
import { tasksInitState } from './tasks.init-state';
import { fetchTasks, addTask, delTask, updateTask } from '../operations';

const handlePending = state => {
    state.tasks.isLoading = true;
};

const handleRejected = (state, action) => {
    state.tasks.isLoading = false;
    state.tasks.error = action.payload;
};

const taskSlice = createSlice({
    name: 'tasks',
    initialState: tasksInitState,
    // reducers: {},

    extraReducers: builder => {
        builder
            .addCase(fetchTasks.pending, handlePending)
            .addCase(fetchTasks.rejected, handleRejected)
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.tasks.isLoading = false;
                state.tasks.error = null;
                state.tasks.items = action.payload;
            });
        builder
            .addCase(addTask.pending, handlePending)
            .addCase(addTask.rejected, handleRejected)
            .addCase(addTask.fulfilled, (state, action) => {
                state.tasks.isLoading = false;
                state.tasks.error = null;
                state.tasks.items.push(action.payload);
            });
        builder
            .addCase(updateTask.pending, handlePending)
            .addCase(updateTask.rejected, handleRejected)
            .addCase(updateTask.fulfilled, (state, action) => {
                state.tasks.isLoading = false;
                state.tasks.error = null;
                state.tasks.items = action.payload.tasks.items;
            });
        builder
            .addCase(delTask.pending, handlePending)
            .addCase(delTask.rejected, handleRejected)
            .addCase(delTask.fulfilled, (state, action) => {
                state.tasks.isLoading = false;
                state.tasks.error = null;
                state.tasks.items = state.tasks.items.filter(
                    task => task.id !== action.payload.id
                );
            });
    },
});

export const taskReducer = taskSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { fetchColumns, updateColumns } from '../operations';
// import { createEntityAdapter } from '@reduxjs/toolkit';

const handlePending = state => {
    state.columns.isLoading = true;
};

const handleRejected = (state, action) => {
    state.columns.isLoading = false;
    state.columns.error = [...action.payload];
};

const handleFulfilled = (state, action) => {
    state.columns.isLoading = false;
    state.columns.error = null;
    state.columns.items = [...action.payload];
};

const columnsSlice = createSlice({
    name: 'columns',
    initialState: {
        columns: {
            items: [],
            isLoading: false,
            error: null,
        },
    },
    reducers: {},

    extraReducers: builder => {
        builder
            .addCase(fetchColumns.pending, handlePending)
            .addCase(fetchColumns.rejected, handleRejected)
            .addCase(fetchColumns.fulfilled, handleFulfilled)
        .addCase(updateColumns.fulfilled,(state,action)=>{})
            // .addCase(addTask.pending, handlePending)
            // .addCase(addTask.rejected, handleRejected)
            // .addCase(addTask.fulfilled, (state, { payload }) => {
            //     state.columns.items.push(payload);
            // })
            // .addCase(updateTask.pending, handlePending)
            // .addCase(updateTask.rejected, handleRejected)
            // .addCase(updateTask.fulfilled, (state, { payload }) => {
            //     const index = state.columns.items.findIndex(
            //         task => task.id === payload.id
            //     );
            //     if (index !== -1) {
            //         state.columns.items[index] = payload;
            //     }
            // })
            // .addCase(delTask.pending, handlePending)
            // .addCase(delTask.rejected, handleRejected)
            // .addCase(delTask.fulfilled, (state, { payload }) => {
            //     state.columns.items = state.columns.items.filter(
            //         task => task.id !== payload.id
            //     );
            // });
    },
});

export const columnsReducer = columnsSlice.reducer;

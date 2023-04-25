import { createSlice } from '@reduxjs/toolkit';
import { userInitState } from './user.init-state';
import { logoutUser, currentUser, updateUser } from '../operations';

const handlePending = state => {
    state.tasks.isLoading = true;
};

const handleRejected = (state, action) => {
    state.tasks.isLoading = false;
    state.tasks.error = action.payload;
};

const userSlice = createSlice({
    name: 'user',
    initialState: userInitState,
    // reducers: {},

    extraReducers: builder => {
        builder
            .addCase(updateUser.pending, handlePending)
            .addCase(updateUser.rejected, handleRejected)
            .addCase(updateUser.fulfilled, (state, action) => {
                state.users.isLoading = false;
                state.users.error = null;
                state.users.items = state.users.items.filter(
                    user => user.id !== action.payload.id
                );
            });
        builder
            .addCase(currentUser.pending, handlePending)
            .addCase(currentUser.rejected, handleRejected)
            .addCase(currentUser.fulfilled, (state, action) => {
                state.users.isLoading = true;
                state.users.error = null;
                state.users.items = state.users.items.filter(
                    user => user.id === action.payload.id
                );
            });
    },
});

export const userReducer = userSlice.reducer;

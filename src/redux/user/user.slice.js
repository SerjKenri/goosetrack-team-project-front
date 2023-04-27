import { createSlice } from '@reduxjs/toolkit';
import { userInitState } from './user.init-state';
import { currentUser, updateUser } from '../operations';

const handlePending = state => {
    state.user.isLoading = true;
};

const handleRejected = (state, action) => {
    state.user.isLoading = false;
    state.user.error = action.payload;
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
                state.user.isLoading = false;
                state.user.error = null;
                state.user.items = state.user.items.filter(
                    user => user.id !== action.payload.id
                );
            });
        builder
            .addCase(currentUser.pending, handlePending)
            .addCase(currentUser.rejected, handleRejected)
            .addCase(currentUser.fulfilled, (state, action) => {
                state.user.isLoading = true;
                state.user.error = null;
                state.user.items = state.user.items.filter(
                    user => user.id === action.payload.id
                );
            });
    },
});

export const userReducer = userSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { initUserState } from '../auth/auth.intit-state';

import { currentUser, updateUser } from '../operations';

const handlePending = state => {
    return state;
};

const handleRejected = (state, action) => {
    // state.user.isLoading = false;
    state.error = action.payload;
};

const userSlice = createSlice({
    name: 'user',
    initialState: initUserState,
    // reducers: {},

    extraReducers: builder => {
        builder
            .addCase(updateUser.pending, handlePending)
            .addCase(updateUser.rejected, handleRejected)
            .addCase(updateUser.fulfilled, (state, action) => {
                state.isLoading = true;
                state.error = null;
                state.user = state.user.filter(
                    user => user.id !== action.payload.id
                );
            });
        builder
            .addCase(currentUser.pending, handlePending)
            .addCase(currentUser.rejected, handleRejected)
            .addCase(currentUser.fulfilled, (state, action) => {
                state.isLoading = true;
                state.error = null;
                state.user = state.user.filter(
                    user => user.id === action.payload.id
                );
            });
    },
});

export const userReducer = userSlice.reducer;

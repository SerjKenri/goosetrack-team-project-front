import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { initUserState } from './auth.intit-state';
import {
    loginUser,
    logoutUser,
    refreshUser,
    signUpUser,
} from 'redux/operations';
const authHandlePending = state => {
    return state;
};
const handleRejected = (state, action) => {
    // state.isLoggedIn = false;
    // state.error = action.payload;
    return state;
};
const authSlice = createSlice({
    name: 'auth',
    initialState: initUserState,
    extraReducers: builder => {
        builder
            .addCase(signUpUser.pending, state => {
                return state;
            })
            .addCase(signUpUser.rejected, state => {
                return state;
            })
            .addCase(signUpUser.fulfilled, (state, actions) => {
                state.user = actions.payload.user;
                state.token = actions.payload.user.token;
                state.isLoggedIn = true;
                // return state;
            });
        builder
            .addCase(loginUser.pending, authHandlePending)
            .addCase(loginUser.rejected, handleRejected)
            .addCase(loginUser.fulfilled, (state, actions) => {
                state.user = actions.payload.user;
                state.token = actions.payload.user.token;
                state.isLoggedIn = true;
                console.log(storage);
                console.log(state);
            });
        builder
            .addCase(logoutUser.pending, authHandlePending)
            .addCase(logoutUser.rejected, handleRejected)
            .addCase(logoutUser.fulfilled, state => {
                state.isLoggedIn = false;
                state.user = { name: null, email: null, token: null };
                state.token = null;
            });
        builder
            .addCase(refreshUser.pending, state => {
                state.isRefreshing = true;
            })
            .addCase(refreshUser.rejected, state => {
                state.isRefreshing = false;
            })
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoggedIn = true;
                state.isRefreshing = false;
            });
    },
});
export const authReducer = authSlice.reducer;

const persistConfig = {
    key: 'userToken',
    storage,
    whitelist: ['token'],
};

export const authPersistReducer = persistReducer(persistConfig, authReducer);

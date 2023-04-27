// import { createSlice } from '@reduxjs/toolkit';
// import { initUserState } from '../auth/auth.intit-state';
// import { currentUser, updateUser, logoutUser } from '../operations';

// const authHandlePending = state => {
//     return state;
// };

// const handlePending = state => {
//     state.user.isLoading = true;
// };

// const handleRejected = (state, action) => {
//     state.user.isLoading = false;
//     state.user.error = action.payload;
// };

// const userSlice = createSlice({
//     name: 'auth',
//     initialState: initUserState,
//     // reducers: {},

//     extraReducers: builder => {
//         builder
//             .addCase(updateUser.pending, handlePending)
//             .addCase(updateUser.rejected, handleRejected)
//             .addCase(updateUser.fulfilled, ({ user }, { payload }) => {
//                 user = { ...user, payload };
//             });
//         builder
//             .addCase(currentUser.pending, handlePending)
//             .addCase(currentUser.rejected, handleRejected)
//             .addCase(currentUser.fulfilled, (state, { payload }) => {
//                 console.log(state.user, payload.user)
//                 // state.user.isLoading = true;
//                 // state.user.error = null;
//                 // state.user.items = state.user.items.filter(
//                 //     user => user.id === action.payload.id
//                 // );
// state.user = { ...state.user, ...payload.user }            });
//         builder
//             .addCase(logoutUser.pending, authHandlePending)
//             .addCase(logoutUser.rejected, handleRejected)
//             .addCase(logoutUser.fulfilled, state => {
//                 state.isLoggedIn = false;
//                 state.user = {
//                     name: null,
//                     email: null,
//                     token: null,
//                     verify: null,
//                     id: '',
//                     avatarURL: '',
//                     birthDay: '',
//                     phone: '',
//                     messenger: '',
//                 };
//                 state.token = null;
//             });
//     },
// });

// export const userReducer = userSlice.reducer;

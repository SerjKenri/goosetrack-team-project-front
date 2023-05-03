export const selectUserState = state => state.auth.user;
export const selectIsLoggedInState = state => state.auth.isLoggedIn;
export const selectIsRefreshingState = state => state.auth.isRefreshing;
export const selectTokenState = state => state.auth.token;
export const selectIsLoadingState = state => state.auth.isLoading;


export const selectUserId = state => state.auth.user.id;
export const selectUserName = state => state.auth.user.name;
export const selectUserEmail = state => state.auth.user.email;
export const selectUserPhone = state => state.auth.user.phone;
export const selectUserBirthday = state => state.auth.user.birthDay;
export const selectUserAvatar = state => state.auth.user.avatarURL;
export const selectUserTelegram = state => state.auth.user.messenger;
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';

import { authApi } from './auth/auth.api';
import { tasksApi } from './tasks/tasks.api';
import { userApi } from './user/user.api';

export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [tasksApi.reducerPath]: tasksApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
    },
    devTools: true,
    middleware: getDefaultMiddleware => [
        ...getDefaultMiddleware(),
        authApi.middleware,
        tasksApi.middleware,
        userApi.middleware,
    ],
});
setupListeners(store.dispatch);
// export const persistor = persistStore(store);

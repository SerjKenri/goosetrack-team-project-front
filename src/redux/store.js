import { configureStore } from '@reduxjs/toolkit';
import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

import { tasksInitState } from './tasks/tasks.init-state';
import { taskReducer } from './tasks/tasks.slice';
import { userInitState } from './user/user.init-state';
import { userReducer } from './user/user.slice';
import { initAuthData } from './auth/auth.intit-state';
import { authPersistReducer } from './auth/auth.slice';

const initState = {
    tasks: tasksInitState,
    auth: initAuthData,
    user: userInitState,
};

export const store = configureStore({
    preloadedState: initState,
    reducer: {
        tasks: taskReducer,
        auth: authPersistReducer,
        user: userReducer,
    },
    devTools: true,

    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});

export const persistor = persistStore(store);

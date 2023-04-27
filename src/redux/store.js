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
// import { userReducer } from './user/user.slice';
import { initUserState } from './auth/auth.intit-state';
import { authPersistReducer } from './auth/auth.slice';

const initState = {
    tasks: tasksInitState,
    auth: initUserState,
    user: initUserState,
};

export const store = configureStore({
    preloadedState: initState,
    reducer: {
        tasks: taskReducer,
        auth: authPersistReducer,
        // user: userReducer,
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

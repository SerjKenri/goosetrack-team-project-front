import { configureStore } from '@reduxjs/toolkit';

import { authApi } from './auth/auth.api';
import { setupListeners } from '@reduxjs/toolkit/query/react';

export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
    },
    devTools: true,
    middleware: getDefaultMiddleware => [
        ...getDefaultMiddleware(),
        authApi.middleware,
    ],
});
setupListeners(store.dispatch);
// export const persistor = persistStore(store);

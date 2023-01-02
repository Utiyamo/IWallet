import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/users/UserSlice';
import appReducer from './features/app/AppSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        app: appReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});
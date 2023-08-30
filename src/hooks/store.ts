import { configureStore, Middleware } from '@reduxjs/toolkit'
import rootReducer from '../store/reducers/rootReducers';
const middlewares:Middleware[] = [];
export const store = configureStore({
    reducer:rootReducer,
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
        serializableCheck: false
    }).concat(middlewares)
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
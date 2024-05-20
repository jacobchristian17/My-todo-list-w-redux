import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import todoReducer from "@/features/todos/todoSlice";
import thunkMiddleware from "redux-thunk";
const store = configureStore({
    reducer: {
        todos: todoReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        thunk: {
            extraArgument: thunkMiddleware
        }
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
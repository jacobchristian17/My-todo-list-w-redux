import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "@/features/todos/todoSlice";
import thunkMiddleware from "redux-thunk";
const store = configureStore({
    reducer: {
        todos: todoReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunkMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
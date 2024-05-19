import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

interface todoState {
    todos: Todo[]
}

function getLocalTodo() {
    return JSON.parse(localStorage.getItem("todo") || "[]");
}

function setLocalTodo(todo: any[]) {
    localStorage.setItem("todo", JSON.stringify(todo));
}

const initialState: todoState = { todos: getLocalTodo() || [] };
const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        // Payload for add should be the new "To do" text
        addTodo: (state, action: PayloadAction<string>) => {
            const newTodo = {
                id: Date.now(),
                text: action.payload,
                completed: false,
            }
            state.todos.push(newTodo);
            setLocalTodo(state.todos);
        },
        // Payload for toggle should be ID
        toggleTodo: (state, action: PayloadAction<number>) => {
            const todo = state.todos.find(o => o.id === action.payload)
            if (todo) {
                todo.completed = !todo.completed
            }
            setLocalTodo(state.todos);
        },
        removeTodo: (state, action: PayloadAction<number>) => {
            const todos = state.todos.filter(o => o.id !== action.payload)
            state.todos = todos;
            setLocalTodo(state.todos);
        }
    }
});

export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
'use client'
import { useDispatch } from "react-redux";
import { toggleTodo, removeTodo } from "@/features/todos/todoSlice";
import React from "react";

interface ITodoProps {
    id: number;
    text: string;
    completed: boolean;
}

const Todo: React.FC<ITodoProps> = ({ id, text, completed }) => {
    const dispatch = useDispatch();

    return (
        <li style={{ display: "flex", gap: "10px", listStyle: "none" }}>
            <button onClick={() => dispatch(removeTodo(id))}>❌</button>
            <span
                onClick={() => dispatch(toggleTodo(id))}
                style={{ textDecoration: completed ? 'line-through' : 'none' }}
            >{text}</span>
        </li>
    )
}

export default Todo;
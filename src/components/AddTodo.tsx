'use client'
import { addTodo } from "@/features/todos/todoSlice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const AddTodo: React.FC = () => {
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (text.trim()) {
            dispatch(addTodo(text));
            setText('');
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="todo_action"
                value={text}
                onChange={e => setText(e.target.value)} placeholder="Enter todo..."
            />
            <button type="submit">Add todo! 🚀</button>
        </form>
    )
}

export default AddTodo
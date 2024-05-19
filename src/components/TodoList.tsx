'use client'
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import Todo from "./Todo";
import React from "react";

const TodoList: React.FC = () => {
    const todos = useSelector((state: RootState) => state.todos.todos);

    return (
        <ul>
            {todos.map(todo => <Todo key={todo.id} {...todo} />)}
        </ul>
    )
}

export default TodoList;
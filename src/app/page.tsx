'use client'
import styles from "./page.module.css";
import AddTodo from "@/components/AddTodo";
import TodoList from "@/components/TodoList";
import { Provider } from "react-redux";
import store from "./store";

export default function Home() {
  return (
    <Provider store={store}>
      <main className={styles.main}>
        Wow! Main app
        <h1>Todo List</h1>
        <AddTodo />
        <TodoList />
      </main>
    </Provider>
  );
}

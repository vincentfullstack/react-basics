import React, { useCallback } from "react";
import { useTodo } from "../context/TodoConext";

export default function TodoListItem({ id, text, completed }) {
  const { dispatch } = useTodo();

  const toggleTodo = useCallback(() => {
    dispatch({
      type: "TOGGLE_TODO",
      id,
    });
  }, [dispatch, id]);

  const removeTodo = useCallback(() => {
    dispatch({
      type: "REMOVE_TODO",
      id,
    });
  }, [dispatch, id]);

  return (
    <div>
      <span
        onClick={toggleTodo}
        className={`todo-list-item ${completed ? "red" : ""}`}
      >
        {text}
      </span>
      <button onClick={removeTodo}>X</button>
    </div>
  );
}

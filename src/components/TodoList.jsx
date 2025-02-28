import React, { useMemo } from "react";
import { useTodo } from "../context/TodoConext";
import TodoListItem from "./TodoListItem";

export default function TodoList() {
  const { todos } = useTodo();

  const sortedTodos = useMemo(() => {
    return [...todos].sort((a, b) => Number(a.completed) - Number(b.completed));
  }, [todos]);

  return (
    <div>
      {sortedTodos.length === 0 ? (
        <p>No todos</p>
      ) : (
        sortedTodos.map((todo) => <TodoListItem key={todo.id} {...todo} />)
      )}
    </div>
  );
}

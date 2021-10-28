import React, { useEffect } from "react";
import { todoStore } from "../../store/TodoStore";
import { filterStore } from "../../store/FilterStore";
import Todo from "../../components/todo";
import { observer } from "mobx-react-lite";

function Todos() {
  useEffect(() => {
    if (filterStore.value === "Все задачи") {
      todoStore.getAllTodos();
    }
    if (filterStore.value === "Выполненные задачи") {
      todoStore.getCompletedTodos();
    }
    if (filterStore.value === "Невыполненные задачи") {
      todoStore.getUnCompletedTodos();
    }
  }, [filterStore.value]);

  return (
    <div>
      {todoStore.filteredTodos.map((todo) => (
        <Todo
          key={todo.id}
          isCompleted={todo.isCompleted}
          title={todo.taskTitle}
          onRemove={() => todoStore.removeTodo(todo.id)}
          onChange={() => todoStore.setComplete(todo)}
        />
      ))}
    </div>
  );
}
export default observer(Todos);

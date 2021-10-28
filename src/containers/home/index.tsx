import React, { useState, FormEvent } from "react";
import { todoStore } from "../../store/TodoStore";
import { filterStore } from "../../store/FilterStore";

import { observer } from "mobx-react-lite";
import CenterContainer from "../../components/center-container";
import Todos from "../todos";
import "./style.scss";

function Home() {
  const [taskTitle, setTaskTitle] = useState<string>("");

  function handleAddTodo() {
    todoStore.addTodo(taskTitle);
    todoStore.getAllTodos();
    setTaskTitle("");
  }

  function onEnter(e: FormEvent) {
    e.preventDefault();
    handleAddTodo();
    filterStore.setValue("Все задачи");
  }

  return (
    <CenterContainer>
      <div className="todos">
        <form className="todos-adding-form" onSubmit={onEnter}>
          <input
            type="text"
            placeholder="Задача"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
          />
          <button
            className="todos-adding-form-button"
            type="submit"
            disabled={!taskTitle}
          >
            Добавить
          </button>
        </form>
        <select
          className="todos-filter-select"
          value={filterStore.value}
          onChange={(e) => filterStore.setValue(e.target.value)}
        >
          <option>Все задачи</option>
          <option>Выполненные задачи</option>
          <option>Невыполненные задачи</option>
        </select>
        <Todos />
      </div>
    </CenterContainer>
  );
}

export default observer(Home);

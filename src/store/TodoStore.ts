import { makeAutoObservable } from "mobx";
import { ITodo } from "../models/todo";
import {filterStore} from './FilterStore'

class TodoStore {
  todos: ITodo[] = [
    {
      id: 1,
      taskTitle: "Написасть проект",
      isCompleted: false,
    },
    {
      id: 2,
      taskTitle: "Сходить в магазин",
      isCompleted: true,
    },
  ];

  filteredTodos: ITodo[] | [] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(taskTitle: string) {
    const newTodo: ITodo = {
      id: Date.now(),
      taskTitle,
      isCompleted: false,
    };

    this.todos.push(newTodo);
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);

    if(filterStore.value === 'Все задачи') this.getAllTodos();
    if(filterStore.value === 'Выполненные задачи') this.getCompletedTodos();
    if(filterStore.value === 'Невыполненные задачи') this.getUnCompletedTodos();


  }

  setComplete(todo: ITodo) {
    todo.isCompleted = !todo.isCompleted;
  }

  getAllTodos() {
    this.filteredTodos = this.todos.slice();
  }

  getCompletedTodos() {
    this.filteredTodos = this.todos.filter((todo) => todo.isCompleted === true);
  }

  getUnCompletedTodos() {
    this.filteredTodos = this.todos.filter(
      (todo) => todo.isCompleted === false
    );
  }
}

export const todoStore = new TodoStore();

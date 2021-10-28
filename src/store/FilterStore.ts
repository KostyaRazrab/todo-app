import { makeAutoObservable } from "mobx";

class FilterStore {
  value: string = "Все задачи";

  constructor() {
    makeAutoObservable(this);
  }

  setValue(newValue: string) {
    this.value = newValue;
  }
}

export const filterStore = new FilterStore();

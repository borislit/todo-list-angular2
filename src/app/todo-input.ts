import { Component } from 'angular2/core';

@Component({
  selector: 'todo-input',
  template: `
              <input #newItem />
              <button (click)="addItem(newItem.value)">Add</button>`
})
export class TodoInput {
  constructor() { }

  addItem(item) {
    console.log(item);
  }
}

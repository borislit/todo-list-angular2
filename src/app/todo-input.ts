import { Component } from 'angular2/core';

@Component({
  selector: 'todo-input',
  template: `
              <input #newItem [value]="currentItem" (change)="currentItem = newItem.value" />
              <button (click)="addItem(newItem.value)">Add</button>`
})
export class TodoInput {
  currentItem = '';
  constructor() { }

  addItem(item) {
    console.log(item);
    this.currentItem = '';
  }
}

import { Component } from 'angular2/core';

@Component({
  selector: 'todo-input',
  template: `
              <input [(ngModel)]="currentItem" />
              <button (click)="addItem()">Add</button>`
})
export class TodoInput {
  currentItem = '';
  constructor() { }

  addItem() {
    console.log(this.currentItem);
    this.currentItem = '';
  }
}

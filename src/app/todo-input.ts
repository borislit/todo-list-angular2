import { Component, Output, EventEmitter } from 'angular2/core';

@Component({
  selector: 'todo-input',
  template: `
              <input [(ngModel)]="currentItem" />
              <button (click)="addItem()">Add</button>`
})
export class TodoInput {
  currentItem = '';
  @Output() onItemAdded = new EventEmitter();
  constructor() { }

  addItem() {
    this.onItemAdded.emit(this.currentItem);
    this.currentItem = '';
  }
}

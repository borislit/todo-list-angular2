import { Component } from 'angular2/core';

@Component({
  selector: 'todo-input',
  template: `
              <input />
              <button>Add</button>`
})
export class TodoInput {
  constructor() { }
}

import {Component} from 'angular2/core';
import {TodoInput} from "./todo-input";

@Component({
  selector: 'todo-app',
  template: `
            <todo-input (onItemAdded)=itemAdded($event)></todo-input>
            <div>{{message}}</div>`,
  directives: [TodoInput]
})

export class TodoApp {
  message = 'Hello World!';

  itemAdded(itemValue) {
    this.message = itemValue;
  }
}

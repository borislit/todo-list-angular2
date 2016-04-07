import {Component} from 'angular2/core';
import {TodoInput} from "./todo-input";
import {TodoList} from "./todo-list";

@Component({
  selector: 'todo-app',
  template: `
            <todo-input (onItemAdded)=itemAdded($event)></todo-input>
            <todo-list [message]="message"></todo-list>
            `,
  directives: [TodoInput, TodoList]
})

export class TodoApp {
  message = 'Hello World!';

  itemAdded(itemValue) {
    this.message = itemValue;
  }
}

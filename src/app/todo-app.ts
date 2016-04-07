import {Component} from 'angular2/core';
import {TodoInput} from "./todo-input";
import {TodoList} from "./todo-list";

@Component({
  selector: 'todo-app',
  template: `
            <todo-input (onItemAdded)=itemAdded($event)></todo-input>
            <todo-list [todos]="todos"></todo-list>
            `,
  directives: [TodoInput, TodoList]
})

export class TodoApp {
  todos = [{value: 'Hello World!', completed: false},
          {value: 'Hello World1!', completed: true},
          {value: 'Hello World2!', completed: false}];

  itemAdded(itemValue) {
    this.todos.push({value: itemValue, completed: false});
  }
}

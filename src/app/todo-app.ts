import {Component} from 'angular2/core';
import {TodoInput} from "./todo-input";
import {TodoList} from "./todo-list";

declare var fetch: any;

@Component({
  selector: 'todo-app',
  template: `
            <todo-input (onItemAdded)=itemAdded($event)></todo-input>
            <todo-list [todos]="todos"></todo-list>
            `,
  directives: [TodoInput, TodoList]
})

export class TodoApp {
  todos;

  constructor() {
    fetch('/app/todos.json').then(res => res.json()).then((response: any) => {
      this.todos = response;
    });
  }

  itemAdded(itemValue) {
    this.todos.push({value: itemValue, completed: false});
  }
}

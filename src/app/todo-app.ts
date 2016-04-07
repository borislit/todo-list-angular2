import {Component} from 'angular2/core';

@Component({
  selector: 'todo-app',
  template: `{{message}}`
})

export class TodoApp {
  message = 'Hello World!';
}

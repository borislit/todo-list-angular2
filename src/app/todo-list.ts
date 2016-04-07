import {Component, Input} from 'angular2/core';

@Component({
  selector: 'todo-list',
  template: `<div>{{message}}</div>`
})

export class TodoList {
  @Input() message;
}

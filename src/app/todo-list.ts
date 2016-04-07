import {Component, Input} from 'angular2/core';

@Component({
  selector: 'todo-list',
  template: `<div>{{todos | json}}</div>`
})

export class TodoList {
  @Input() todos;
}

import {Component, Input} from 'angular2/core';

@Component({
  selector: 'todo-list',
  template: `
              <h2>Todos</h2>
              <ul>
                <li [hidden]="item.completed" *ngFor="#item of todos">{{item.value}}</li>
              </ul>`
})

export class TodoList {
  @Input() todos;
}

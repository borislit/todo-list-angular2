import {Component, Input, ViewEncapsulation} from 'angular2/core';

@Component({
  selector: 'todo-list',
  template: `
              <h2>Todos</h2>
              <ul>
                <li [ngClass]="{'completed': item.completed}" *ngFor="#item of todos">{{item.value}}</li>
              </ul>`,
  styles: [`.completed {
              color: green;
  }`],
  encapsulation: ViewEncapsulation.Emulated
})

export class TodoList {
  @Input() todos;
}

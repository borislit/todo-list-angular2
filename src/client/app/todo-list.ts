import {Component, Input} from 'angular2/core';

@Component({
    selector: 'todo-list',
    template: `
    <H1>Things I need to do:</H1>
    <ul>
        <li *ngFor="#item of todos" [ngClass]="{'complete': item.complete}" >
            <span>{{item.value}}</span>
            <button type="button" (click)="item.complete = true" [hidden]="item.complete === true">Mark Done</button>
        </li>
    </ul>
    `,
    styles: [`
    .complete {
        color: grey;
        text-decoration: line-through;
    }
    `]
    
})
export class TodoList {
    @Input() todos;
}

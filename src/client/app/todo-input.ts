import {Component, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'todo-input',
    template: `
    <form (submit)="addItem()" name="TodoForm">
        <input [(ngModel)]="item" required/>
        <button type="submit">Add</button>
    </form>
    `
    
})
export class TodoInput {
    item = '';
    todoForm;
    @Output() onItemAdded = new EventEmitter();
    
    addItem() {
        console.log(this.item);
        this.onItemAdded.emit(this.item);
        this.item = '';
    }
}

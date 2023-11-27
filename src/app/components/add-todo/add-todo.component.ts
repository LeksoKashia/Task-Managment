import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from 'src/models/todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss','../edit-todo/edit-todo.component.scss' ]
})
export class AddTodoComponent {
  @Input()  darkModeTrue?: boolean;

  @Output() addSelected = new EventEmitter<NgForm>();

  addTodo(addForm: NgForm){
    this.addSelected.emit(addForm);
  }
}

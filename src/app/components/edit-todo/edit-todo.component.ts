import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from 'src/models/todo';


@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss', '../filter/filter.component.scss']
})
export class EditTodoComponent {
  @Input()  darkModeTrue?: boolean;
  @Input()  editTodo?: Todo;

  @Output() editSelected = new EventEmitter<[NgForm, Todo]>();

  onEditTodo(editForm: NgForm, editTodo: Todo){
    this.editSelected.emit([editForm, editTodo]);
  }
}

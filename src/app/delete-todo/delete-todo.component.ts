import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/models/todo';

@Component({
  selector: 'app-delete-todo',
  templateUrl: './delete-todo.component.html',
  styleUrls: ['./delete-todo.component.scss']
})
export class DeleteTodoComponent {
  @Input()  delTodo?: Todo;
  @Input()  darkModeTrue?: boolean;

  @Output() deleteSelected = new EventEmitter<number>();

  deleteBook(id: number){
    this.deleteSelected.emit(id);
  }
}

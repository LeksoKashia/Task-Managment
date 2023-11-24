import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Todo } from 'src/models/todo';
import { TodoService } from 'src/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit{
  todos: Todo[] = [];
  editTodo!: Todo;

  constructor(private todoService: TodoService, private router:Router){

  }
  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
  }

  public openModal(mode: string, todo?: Todo): void {
    const container = document.getElementById('todos');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');

    if (mode === 'add') {
      button.setAttribute('data-target', '#addEmployeeModal');
    }

    if (mode === 'edit') {
      console.log('1');
      button.setAttribute('data-target', '#updateEmployeeModal');
      
      if (todo){
        console.log(2);
        this.editTodo = todo;

      }

    }

    container?.appendChild(button);
    button.click();
  }

  // if (mode === 'delete') {
    //   this.deleteEmployeer = employee!;
    //   button.setAttribute('data-target', '#deleteEmployeeModal');
    // }

  addTodo(addForm: NgForm) {
    if (addForm.valid) {
      this.todos.push(
        {
          'id': this.todos.length + 1,
          'title': addForm.value.name,
          'status': "Incomplete"
        }
      );
    }
    const button = document.getElementById('add-employee-form');
    button?.click();
    addForm.reset()
  }

  editFormiko(editForm: NgForm, todo: Todo) {
    if(editForm.value){
      todo.title = editForm.value.title;
    }

    const button = document.getElementById('edit-employee-form');
    button?.click();
  }
  deleteBlog(id: number){
    this.todos = this.todos.filter((todo) => todo.id !== id);
    console.log(this.todos);
    
    // delete this.todos[id-1]
  }


}

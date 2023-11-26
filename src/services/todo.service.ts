import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Todo } from 'src/models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos : Todo[] = [
    {
      'id': 1,
      'title': "React task",
      'status': 'completed'
    },

    {
      'id': 2,
      'title': "Jogging at 8",
      'status': 'Incomplete'
    },

    {
      'id': 3,
      'title': "Swimming at 11",
      'status': 'Incomplete'
    },

    
  ]
  onCheckboxChange(todo: Todo){
    let id = todo.id;
    this.todos = this.todos.map(todo =>
      todo.id === id ? { ...todo, status: todo.status === "completed" ? "Incomplete" : "completed" } : todo
    );
  }

  deleteBlog(id:number){
    delete this.todos[id-1]

  }

  getTodos() {
    console.log(123);
    console.log(this.todos);
    
    
    return this.todos;
  }
  
  // addTodo(addForm: NgForm) {
  //   if (addForm.valid) {
  //     this.todos.push(
  //       {
  //         'id': this.todos.length + 1,
  //         'title': addForm.value.name,
  //         'status': "Incomplete"
  //       }
  //     );
  //   }
  //   console.log(this.todos);
    

  // }

  // deleteBook(id: number){
  //   delete this.books[id - 1];
  // }

  // getBlogById(bookId: number){
  //   return this.books[bookId - 1]
  // }


}
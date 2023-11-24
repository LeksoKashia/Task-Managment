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
      'title': "note 1",
      'status': 'Incomplete'
    },

    {
      'id': 2,
      'title': "note 2",
      'status': 'Incomplete'
    },

    {
      'id': 3,
      'title': "note 3",
      'status': 'Incomplete'
    },

    
  ]

  constructor(private router: Router) {}
  getTodos() {
    return this.todos;
  }
  
  // addBook(bookForm: NgForm) {
  //   if (bookForm.valid) {
  //     this.books.push(
  //       {
  //         'id': this.books.length + 1,
  //         'title': bookForm.value.title,
  //         'description': bookForm.value.description,
  //         'publishYear': bookForm.value.publishYear,
  //         'author': bookForm.value.author,
  //         'imageUrl': bookForm.value.imageUrl
  //       }
  //     );
  //   }

  //   this.router.navigate(['/']);

  // }

  // deleteBook(id: number){
  //   delete this.books[id - 1];
  // }

  // getBlogById(bookId: number){
  //   return this.books[bookId - 1]
  // }


}
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Todo } from 'src/models/todo';
import { TodoService } from 'src/services/todo.service';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss', '../filter/filter.component.scss']
})
export class TodosComponent implements OnInit{
  todos_todos: Todo[] = this.todoService.getTodos();
  editTodo!: Todo;
  edit: string = "lesko";
  darkModeTrue?: boolean;
  delTodo?: Todo;
  count: number = this.todos_todos.length;
  
  public hoveredTodo: Todo | null = null;


  public setHoveredTodo(todo: Todo): void {
    this.hoveredTodo = todo;
  }
  
  public clearHoveredTodo(): void {
    this.hoveredTodo = null;
  }
  @Output() changeTheme = new EventEmitter<boolean>();


  constructor(private todoService: TodoService, private router:Router){

  }
  ngOnInit(): void {

  }

  public openModal(mode: string, id?: number, todo?: Todo): void {
    const container = document.getElementById('todos');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');

    if (mode === 'add') {
      button.setAttribute('data-target', '#addEmployeeModal');
    }

    if (mode === 'edit') {
      button.setAttribute('data-target', '#updateEmployeeModal');
      if(id){
        this.editTodo = this.todos_todos[id-1];
      }
    }

    if (mode === 'delete') {
      this.delTodo = todo;
      button.setAttribute('data-target', '#deleteEmployeeModal');
    }


    container?.appendChild(button);
    button.click();
  }


  addTodo(addForm: NgForm) {
    this.count++;
    this.todoService.addTodo(addForm);
    this.todos_todos = this.todoService.getTodos();
    console.log(this.todos_todos);
    
    const button = document.getElementById('add-employee-form');
    button?.click();
    addForm.reset()
  }


  onSubmit(arr: any[]) {
    const inputValue = arr[1].title;
  
    if (inputValue.trim() === '') {
      arr[1].title = arr[1].title || "Change failed !";
    } else {
      arr[1].title= inputValue;
    }

    const button = document.getElementById('edit-employee-form');
    button?.click();
  }
  
  deleteBlog(id: number){
    this.count--;
    this.todoService.deleteBlog(id);
    this.todos_todos = this.todoService.getTodos();
  }


  //search

  searchBooks(key: string){
    let cloneBooks: Todo[] = this.todoService.getTodos();

    
    const results: Todo[] = [];
    for (const todo of cloneBooks) {
      if (todo && todo.title.toLowerCase().indexOf(key.toLowerCase()) !== -1){
        results.push(todo);
      }
    }
    this.todos_todos =  results;
    if (!key) {
      this.todos_todos =  this.todoService.getTodos();
    }
  }




  //checkbox
  onCheckboxChange(todo: Todo){
    let id = todo.id;
    this.todoService.onCheckboxChange(todo);
    this.todos_todos =  this.todos_todos.map(todo =>
      todo.id === id ? { ...todo, status: todo.status === "completed" ? "Incomplete" : "completed" } : todo
    );
  }


  selectTodos(event: any){
    let cloniko : Todo[] = this.todoService.getTodos();
    
    const selectedValue = event.target.value;
    if (selectedValue === 'All') {
      this.todos_todos =  cloniko;
    }else{
      this.todos_todos =  this.todoService.getTodos();
      this.todos_todos =  this.todos_todos.filter((todo) => selectedValue === todo.status)
      
    }
  }



  themeChange(darkMode: boolean){
    this.darkModeTrue = !darkMode;
    this.changeTheme.emit(darkMode);
  }

}

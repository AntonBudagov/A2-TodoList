import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise'

// import {todos} from './data';
import {Todo} from './todos';

@Injectable()
export class TodoService {
  private apiUrl = 'api/todos'
  todos: Todo[] = [];

  constructor(private http: Http){}

  getTodos(): Promise<Todo[]>{
    // return this.todos;
    return this.http.get(this.apiUrl)
    .toPromise()
    .then(res => res.json().data)
    .then(todos => this.todos = todos)
    .catch(this.handleError);
  }

  createTodo(title: string){
    let todo = new Todo(title)
    this.todos.push(todo);
  }

  deleteTodo(todo: Todo){

    console.log('delete')
    let index = this.todos.indexOf(todo)

    if(index > -1){
      this.todos.splice(index, 1)
    }

  }

  toggleTodo(todo: Todo){
    todo.completed = !todo.completed
  }

  private handleError(error: any){
    console.log("error my msg!", error)
    return Promise.reject(error.message || error);
  }

}
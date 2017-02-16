import {Component} from '@angular/core';

import  {Todo} from './shared/todos';
import { todos } from './shared/data'

@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']

})

export class AppComponent{
  title:string = "Angular ToDo";
  todos: Todo[] = todos;


  // create(title: string){
  //   const todo = new Todo(title);
  //   this.todos.push(todo);
  // }

}
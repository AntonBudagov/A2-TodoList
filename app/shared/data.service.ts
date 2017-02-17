import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDataService {
  createDb(){
    const todos = [
    {
      title:'Изучить Англиский язык',
      completed: true
     },
     {
      title:'Изучить Англиский язык 2',
      completed: false
     },
     {
      title:'Изучить Англиский язык 3',
      completed: true
     }
    ];
    return {todos};
  }
}


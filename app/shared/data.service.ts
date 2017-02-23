import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDataService {
  createDb(){
    const todos = [
    {
      id: 1,
      title:'Изучить Англиский язык',
      completed: true
     },
     {
      id: 2,
      title:'Изучить Англиский язык 2',
      completed: false
     },
     {
      id: 3,
      title:'Изучить Англиский язык 3',
      completed: true
     }
    ];
    return {todos};
  }
}


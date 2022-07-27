import { Injectable, OnInit } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { mockTasks } from '../mocks/tasks';

export type Task = {
  task: string,
  done: boolean,
  id: number,
}

@Injectable({
  providedIn: 'root'
})
export class TasksService implements OnInit {

  constructor() { }

  ngOnInit() {}

  getTasks(): Observable<Task[]> {
    return of(mockTasks);
  }
}

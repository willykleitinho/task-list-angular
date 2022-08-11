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
  private tasks: Task[] = [];
  lastId = this.tasks.length + 1;

  constructor() { }

  ngOnInit() {}

  getTasks(): Observable<Task[]> {
    return of(this.tasks);
  }

  addTask(title: string) {
    this.tasks.push({
      task: title,
      done: false,
      id: this.lastId++,
    });
  }

}

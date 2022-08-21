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
  lastId = 1;

  constructor() {
    const userTasks = localStorage.getItem('user-tasks');

    console.log(userTasks);

    if (!userTasks) return;

    try {
      let tasks: Task[] = JSON.parse(userTasks);
      
      if (!Array.isArray(tasks) || tasks.length < 1) throw new Error();
      
      tasks = tasks.sort((a: Task, b: Task) => a.id - b.id);

      this.lastId = tasks[tasks.length -1].id + 1;
      this.tasks = Array.from(tasks);
    } catch {}
   }

  ngOnInit() {
    
  }

  getTasks(): Observable<Task[]> {
    return of(this.tasks);
  }

  addTask(title: string) {
    this.tasks.push({
      task: title,
      done: false,
      id: this.lastId++,
    });

    this.saveTasks();
  }
  
  toggleDone(id: Task['id']) {
    this.tasks.forEach((task) => {
      if (task.id === id) {
        task.done = !task.done;
      }
    });

    this.saveTasks();
  }
  
  saveTasks() {
    localStorage.setItem('user-tasks', JSON.stringify(this.tasks));
  }

  deleteTask(id: Task['id']) {
    this.tasks.splice(this.tasks.findIndex(task => task.id === id));
    this.saveTasks();
  }

  deleteAllTasks() {
    this.tasks.splice(0, this.tasks.length);
    this.saveTasks();
  }
}

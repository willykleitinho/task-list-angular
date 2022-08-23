import { Component, OnInit } from '@angular/core';
import { Task, TasksService } from '../services/tasks.service';

import {
  trigger,
  state,
  style,
  transition,
  animate,
  query,
} from '@angular/animations';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  animations: [
    trigger('shrinkOut', [
      state('in', style({ height: '*', opacity: '1', padding: '*' })),
      state('void', style({ height: 0, opacity: '0', paddingTop: '0', paddingBottom: '0' })),
      transition('in <=> void', [
        animate('150ms linear')
      ])
    ]),
    trigger('shrinkOutMessage', [
      state('in', style({ display: 'block' })),
      state('void', style({ display: 'none' })),
      transition('void => in', [
        //animate('150ms 400ms ease-in-out'),
        animate('0ms 150ms'),
      ]),
      transition('in => void', [
        animate(0),
      ]),
    ]),
  ]
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
    this.tasksService.getTasks()
      .subscribe((tasks) => this.tasks = tasks);
  }

  toggleDone(id: Task['id']) {
    this.tasksService.toggleDone(id);
  }

  deleteTask(id: Task['id']) {
    console.log('delete task', id);
    this.tasksService.deleteTask(id);
  }

}

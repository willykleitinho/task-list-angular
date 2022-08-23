import { Component, OnInit } from '@angular/core';
import { Task, TasksService } from '../services/tasks.service';

import {
  trigger,
  state,
  style,
  transition,
  animate,
  animateChild,
  query,
  group,
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
        animate('150ms 100ms linear')
      ])
      ,
    ]),
    trigger('shrinkOutMessage', [
      state('in', style({ height: '*', padding: '*', color: '*' })),
      state('void', style({ height: '0', paddingBottom: 0, paddingTop: 0, color: 'transparent' })),
      transition('void => in', [
        //animate('150ms 400ms ease-in-out'),
        animate('150ms 250ms ease-in-out'),
      ]),
      transition('in => void', [
        animate('150ms ease-in-out'),
      ]),
    ]),
    trigger('onMount', [
      state('void', style({ opacity: 0, transform: 'translateY(-20px)' })),
      state('show', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('void => show', [
        animate('100ms 100ms ease-in-out'),
      ])
    ]),
    trigger('onMountList', [
      state('void', style({ opacity: 0 })),
      state('show', style({ opacity: 1 })),
      transition('void => show', [
        animate('200ms ease-in-out'),
      ]),
    ])
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

import { Component, OnInit } from '@angular/core';
import {
  style,
  trigger,
  state,
  animate,
  transition,
} from '@angular/animations';

import { FormControl, FormGroup } from '@angular/forms';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss'],
  animations: [
    trigger('onMount', [
      state('show', style({ opacity: 1, transform: 'translateY(0)' })),
      state('void', style({ opacity: 0, transform: 'translateY(50px)' })),
      transition('void => show', [
        animate('100ms 100ms ease-in-out')
      ])
    ])
  ]
})
export class ActionBarComponent implements OnInit {

  showModal = false;
  showDeleteModal = false;

  newTaskControl = new FormGroup({
    title: new FormControl(''),
  });

  constructor(
    private tasksService: TasksService
  ) { }

  ngOnInit(): void {
  }

  toggleModal() {
    this.showModal = !this.showModal;
  }

  toggleDeleteModal() {
    this.showDeleteModal = !this.showDeleteModal;
  }

  newTaskSubmit() {
    const {
      title,
    } = this.newTaskControl.value;

    if (!title || title.trim().length < 1) return;


    this.tasksService.addTask(title);
    this.newTaskControl.reset();
    this.toggleModal();
  }

  deleteAllTasks() {
    this.tasksService.deleteAllTasks();
    this.showDeleteModal = !this.showDeleteModal;
  }
}

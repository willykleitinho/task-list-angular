import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss']
})
export class ActionBarComponent implements OnInit {

  showModal = false;

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
    const confirmed = confirm('Deletar todas as tarefas?');

    if (!confirmed) return;

    this.tasksService.deleteAllTasks();
  }
}

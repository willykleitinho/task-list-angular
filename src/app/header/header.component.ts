import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('onMount', [
      state('void', style({ opacity: 0, transform: 'translateY(-50px)' })),
      state('show', style({ opacity: 1, transform: 'translateY(0)' })),
      transition('void => show', [
        animate('150ms 100ms ease-in-out'),
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit {

  title = 'Tarefas'

  constructor() { }

  ngOnInit(): void {
  }

}

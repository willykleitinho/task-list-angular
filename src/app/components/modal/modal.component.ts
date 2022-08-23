import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { 
  trigger,
  animate,
  transition,
  state,
  style,
  query,
} from '@angular/animations';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [
    trigger('showModal', [
      state('show', style({ opacity: 1, })),
      state('void', style({ opacity: 0, })),
      transition('void <=> show', [
        query('.card-outer-container', style({ transform: 'scale(0)', opacity: 0.5 })),
        animate('100ms ease-in-out'),
        query(
          '.card-outer-container',
          animate('100ms 150ms ease-in-out', style({
            transform: 'scale(1)',
            opacity: 1
          }))),
      ]),
      // does not shrink card back on leave
    ]),
  ],
})
export class ModalComponent implements OnInit {

  @Input() show!: boolean;
  @Input() size: 'sm' | 'md' | 'lg' = 'lg';

  @Output() onToggle: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
}

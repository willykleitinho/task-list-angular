import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() show!: boolean;
  @Input() size: 'sm' | 'md' | 'lg' = 'lg';

  @Output() onToggle: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
}

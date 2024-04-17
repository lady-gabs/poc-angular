import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule, ModalComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  @Input() tvShows: any;
  @Output() currentShow: EventEmitter <any> = new EventEmitter();

  openModal() {
    console.log("Abrir modal.");
  }
}

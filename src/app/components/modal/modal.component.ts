import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingComponent } from '../rating/rating.component';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, RatingComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() showInfos: any;
  show = false;
  
  showModal() {
    this.show = !this.show;
  }
  close() {
    this.show = !this.show;
  }
}

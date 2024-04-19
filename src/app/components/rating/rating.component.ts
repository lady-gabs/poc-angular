import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent {
  @Input() rating: number = 0;
  rateDecimal = this.rating - Math.floor(this.rating);
  arrayStars: any = [];
  semiStar =  `inset(0 ${100 - (this.rateDecimal*100)}% 0 0)`;
  ngOnInit() {
    this.arrayStars = Array(Math.floor(this.rating)).fill(1);
  }
}

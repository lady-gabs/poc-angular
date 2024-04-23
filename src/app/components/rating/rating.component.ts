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
  rateDecimal: number = 0;
  arrayStars: any = [];
  semiStar: string = '';
  
  ngOnInit() {
    this.arrayStars = Array(Math.floor(this.rating)).fill(1);
    this.rateDecimal = 100-((this.rating - Math.floor(this.rating))*100);
    this.semiStar =  `inset(0 ${this.rateDecimal}% 0 0)`;
  }
}

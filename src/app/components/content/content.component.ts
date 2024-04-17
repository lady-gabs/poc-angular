import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from '../cards/cards.component';
import { HeaderComponent } from "../header/header.component";
import { TvshowService } from '../../services/tvshow.service';

@Component({
    selector: 'app-content',
    standalone: true,
    templateUrl: './content.component.html',
    styleUrl: './content.component.css',
    imports: [CommonModule, CardsComponent, HeaderComponent]
})
export class ContentComponent {
  results = [];

  constructor(private showService: TvshowService) { }
  
  async searchShow(value: string){
    this.results = await this.showService.getShows(value);
    console.log(this.results);
  }

}

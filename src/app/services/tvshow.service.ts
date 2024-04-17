import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TvshowService {
  private api = 'https://api.tvmaze.com/search/shows?q=';

  constructor(private http: HttpClient) { }
  
  async getShows(value: string) {
    let responseApi = (await fetch(`${this.api}+${value}`));
    let result = await responseApi.json()
    return result;
  }
  
}

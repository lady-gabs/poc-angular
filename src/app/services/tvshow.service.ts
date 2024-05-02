import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TvshowService {
  private api = 'https://api.tvmaze.com/search/shows?q=';

  constructor(private http: HttpClient) { }
  
  async getShows(value: string) {

    try {
      if (value === '') {
          throw new Error('Insira um título.');
      }

      let responseApi = (await fetch(`${this.api}+${value}`));
      let result = await responseApi.json()

      if (result.length < 1) {
          throw new Error('A pesquisa não retornou resultados.');
      }

      return result;
    } catch (error) {
        alert(error);
    }
  }
  
}

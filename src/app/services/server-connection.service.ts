import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 API_KEY = 'JE_NE_SAIS_PAS_QUOI_MAITRE_ICI';

  constructor(private httpClient: HttpClient) { }

  public getNews() {
    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}`);
  }

}
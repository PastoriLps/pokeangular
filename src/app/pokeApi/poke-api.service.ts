import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  constructor(private client: HttpClient) { }

  public getFirstPage() {
    return this.client.get('https://pokeapi.co/api/v2/pokemon/?limit=25');
  }

  public getCustomPage(url: string) {
    return this.client.get(url);
  }
}

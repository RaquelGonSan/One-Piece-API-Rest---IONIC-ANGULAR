import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OnePieceService {

  http = inject(HttpClient);
  baseUrl: string = 'https://one-piece-episodes.p.rapidapi.com/one_piece';

  constructor() { }

  getSeasons(){
    return this.http.get( this.baseUrl + '/seasons', {
      headers: {
        'X-RapidAPI-Key': 'be38d162c3mshfc14535f64748dep152021jsn1816cd17cedf',
        'X-RapidAPI-Host': 'one-piece-episodes.p.rapidapi.com'
      },
      params: {language: 'es'},
    })

  }

  getEpisodesBySeasons(id: string){
    return this.http.get( this.baseUrl + '/episodes_by_season/' +id, {
      headers: {
        'X-RapidAPI-Key': 'be38d162c3mshfc14535f64748dep152021jsn1816cd17cedf',
        'X-RapidAPI-Host': 'one-piece-episodes.p.rapidapi.com'
      },
      params: {language: 'es'},
    })

  }

  getEpisodesByNumber(number: string){
    return this.http.get( this.baseUrl + '/episode/' +number, {
      headers: {
        'X-RapidAPI-Key': 'be38d162c3mshfc14535f64748dep152021jsn1816cd17cedf',
        'X-RapidAPI-Host': 'one-piece-episodes.p.rapidapi.com'
      },
      params: {language: 'es'},
    })

  }

}

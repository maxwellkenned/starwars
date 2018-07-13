import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Filme } from '../shared/interface/filmes.interface';
import { API } from '../app-api';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  constructor( private http: HttpClient) { }


  public getFilmes(): Observable<Filme[]> {
    const url = API + 'films/';
    return this.http.get<Filme[]>(url, {responseType: 'json'});
  }
}

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


  public getFilmes(url: string = ''): Observable<Filme[]> {
    const getUrl = url ? url : API + 'films/';
    return this.http.get<Filme[]>(getUrl, {responseType: 'json'});
  }

  public getFilmeDetalhe(id): Observable<Filme> {
    const getUrl = API + `films/${id}/`;
    return this.http.get<Filme>(getUrl, {responseType: 'json'});
  }

}

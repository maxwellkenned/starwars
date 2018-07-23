import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Nave } from '../shared/interface/naves.interface';
import { API } from '../app-api';

@Injectable({
  providedIn: 'root'
})
export class NavesService {

  constructor(private http: HttpClient) { }

  public getNaves(url: string = ''): Observable<Nave[]> {
    const getUrl = url ? url : API + 'starships/';
    return this.http.get<Nave[]>( getUrl, {responseType: 'json'});
  }

  public getNaveDetalhe(id): Observable<Nave> {
    const getUrl = API + `starships/${id}/`;
    return this.http.get<Nave>(getUrl, {responseType: 'json'});
  }
}

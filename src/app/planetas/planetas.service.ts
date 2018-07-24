import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { API } from '../app-api';
import { Planeta } from '../shared/interface/planetas.interface';

@Injectable({
  providedIn: 'root'
})
export class PlanetasService {

  constructor( private http: HttpClient) { }


  public getPlanetas(url: string = ''): Observable<Planeta[]> {
    const getUrl = url ? url : API + 'planets/';
    return this.http.get<Planeta[]>(getUrl, {responseType: 'json'});
  }

  public getPlanetaDetalhe(id): Observable<Planeta> {
    const getUrl = API + `planets/${id}/`;
    return this.http.get<Planeta>(getUrl, {responseType: 'json'});
  }


}

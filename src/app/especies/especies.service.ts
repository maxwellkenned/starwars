import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Especie } from '../shared/interface/especies.interface';
import { API } from '../app-api';

@Injectable({
  providedIn: 'root'
})
export class EspeciesService {

  constructor( private http: HttpClient) { }


  public getEspecies(url: string = ''): Observable<Especie[]> {
    const getUrl = url ? url :  API + 'species/';
    return this.http.get<Especie[]>(getUrl, {responseType: 'json'});
  }
}

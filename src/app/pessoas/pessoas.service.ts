import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { API } from '../app-api';
import { Pessoa } from '../shared/interface/pessoas.interface';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  constructor( private http: HttpClient) { }


  public getPessoas(url: string = ''): Observable<Pessoa[]> {
    const getUrl = url ? url : API + 'people/';
    return this.http.get<Pessoa[]>(getUrl, {responseType: 'json'});
  }

  public getPessoaDetalhe(id): Observable<Pessoa> {
    const getUrl = API + `people/${id}/`;
    return this.http.get<Pessoa>(getUrl, {responseType: 'json'});
  }

}

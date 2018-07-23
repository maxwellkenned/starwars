import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Veiculo } from '../shared/interface/veiculos.interface';
import { API } from '../app-api';

@Injectable({
  providedIn: 'root'
})
export class VeiculosService {

  constructor(private http: HttpClient) { }

  public getVeiculos(url: string = ''): Observable<Veiculo[]> {
    const getUrl = url ? url : API + 'vehicles/';
    return this.http.get<Veiculo[]>(getUrl, {responseType: 'json'});
  }

  public getVeiculoDetalhe(id): Observable<Veiculo> {
    const getUrl = API + `vehicles/${id}/`;
    return this.http.get<Veiculo>(getUrl, {responseType: 'json'});
  }

}

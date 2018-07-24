import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Name } from '../interface/names.interface';

@Injectable({
  providedIn: 'root'
})
export class NamesService {

  private ObjName = { };

  constructor(private http: HttpClient) { }

  public getName(url: string = ''): Observable<Name> {
    const getUrl = url;
    return this.http.get<Name>(getUrl, {responseType: 'json'});
  }
}

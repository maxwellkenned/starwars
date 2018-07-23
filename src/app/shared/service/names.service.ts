import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NamesService {

  constructor(private http: HttpClient) { }

  public getName(url: string = ''): Observable<string> {
    const getUrl = url;
    return this.http.get<string>(getUrl, {responseType: 'json'});
  }
}

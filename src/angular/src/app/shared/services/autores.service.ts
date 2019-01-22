import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Autor } from '../entities/autor';

@Injectable({
  providedIn: 'root'
})
export class AutoresService {
  private url:string = 'api/autores';

  constructor(private http: HttpClient) { }
  
  public listarAutores(): Observable<Autor[]> {
    return this.http.get<Autor[]>(this.url);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livro } from './livro';
import { Autor } from './autor';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {
  private url:string = 'api/livros';

  constructor(private http: HttpClient) { }
  
  public listarLivros(): Observable<Livro[]> {
    return this.http.get<Livro[]>(this.url);
  }
}

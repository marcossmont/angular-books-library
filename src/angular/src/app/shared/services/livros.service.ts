import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livro } from '../entities/livro';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {
  private url:string = 'api/livros';
  
  constructor(private http: HttpClient) { }
  
  public listarLivros(): Observable<Livro[]> {
    return this.http.get<Livro[]>(this.url);
  }

  public criar(livro: any): any {
     let promisse = this.http.post<Livro>(this.url, livro);
    return promisse;
  }
}

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
  
  public criar(livro: Livro): any {
    let promisse = this.http.post<Livro>(this.url, livro);
    return promisse;
  }
  
  public editar(livro: Livro): any {
    let promisse = this.http.put<Livro>(this.url, livro);
    return promisse;;
  }

  public buscarPorId(id:Number): Observable<Livro> {
    return this.http.get<Livro>(`${this.url}/${id}`);
  }
  
}

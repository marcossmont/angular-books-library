import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../entities/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private url:string = 'api/books';
  
  constructor(private http: HttpClient) { }
  
  public list(): Observable<Book[]> {
    return this.http.get<Book[]>(this.url);
  }
  
  public create(livro: Book): any {
    let promisse = this.http.post<Book>(this.url, livro);
    return promisse;
  }
  
  public edit(livro: Book): any {
    let promisse = this.http.put<Book>(this.url, livro);
    return promisse;;
  }

  public find(id:Number): Observable<Book> {
    return this.http.get<Book>(`${this.url}/${id}`);
  }
  
}

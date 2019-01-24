import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Author } from '../entities/author';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  private url:string = 'api/authors';

  constructor(private http: HttpClient) { }
  
  public list(): Observable<Author[]> {
    return this.http.get<Author[]>(this.url);
  }
}

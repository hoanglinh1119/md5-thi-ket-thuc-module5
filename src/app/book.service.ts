import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Book} from "./book";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private readonly url='http://localhost:3000/books';

  constructor(private httpClient: HttpClient) { }
  // @ts-ignore
  listBook(count =100): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.url).pipe(map(response => response.filter((post,i)=> i<count)));
  }
  createBook(book: Partial<Book>): Observable<Book>{
    return this.httpClient.post<Book>(this.url, book);
  }
  getBookById(id: number): Observable<Book> {
    return this.httpClient.get<Book>(`${this.url}/${id}`);
  }
  deleteBook(id: number): Observable<any> {
    return this.httpClient.delete(`${this.url}/${id}`);
  }
  updateBook(book: Book): Observable<Book> {
    return this.httpClient.put<Book>(`${this.url}/${book.id}`, book);
  }
}

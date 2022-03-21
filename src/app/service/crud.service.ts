import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import {Book} from './Book';

@Injectable({
  providedIn: 'root'
})

export class CrudService {

  REST_API: string = 'http://localhost:8000/api';

  httpHeaders = new HttpHeaders().set('content-type', 'application/json');

  constructor(private httpClient: HttpClient) { }

  // add new book
  addBook(data:Book): Observable<any>
  {
    let API_URL = `${this.REST_API}/add-book`;

    return this.httpClient
                  .post(API_URL, data)
                  .pipe(catchError(this.handleError));
  }

  // Get all books

  getAllBooks()
  {
    return this.httpClient
                .get(`${this.REST_API}`);
  }

  // Get single book details
  getBook(id:any): Observable<any>
  {
    let API_URL = `${this.REST_API}/read-book/${id}`;

    let headers = {headers: this.httpHeaders}
    return this.httpClient
                  .get(API_URL, headers)
                  .pipe(
                    map((res:any) => {
                      return res || {}
                    }),
                  catchError(this.handleError)
                  )
  }

  // Update book
  updateBook(id: any, data:any): Observable<any>
  {
    let API_URL = `${this.REST_API}/update-book/${id}`;

    let headers = {headers: this.httpHeaders}
    return this.httpClient
                  .put(API_URL, data, headers)
                  .pipe(catchError(this.handleError))
  }

  // Delete book

  deleteBook(id:any):Observable<any>
  {
    let API_URL = `${this.REST_API}/delete-book/${id}`;

    let headers = {headers: this.httpHeaders}
    return this.httpClient 
                  .delete(API_URL, headers)
                  .pipe(catchError(this.handleError));
  }
  
  //Error handling
  handleError(error:HttpErrorResponse){

    let erroreMessage = '';

    if(error.error instanceof ErrorEvent)
    {
      //Handle client error
      erroreMessage = error.error.message;
    }
    else
    {
      // handle server error
      erroreMessage = `Error code: ${error.status}\n Message: ${error.message}`; 
    }
    console.log(erroreMessage);

    return throwError(() => {
      erroreMessage;
    })
  }

}

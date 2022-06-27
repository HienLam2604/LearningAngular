import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Blog } from '../models/blog';
import { environment } from 'src/environments/environment';

const baseUrl = `${environment.apiUrl}`; // http://localhost:4200
const restFullApiUrl = `${environment.restApiUrl}`; //[RestAPI] http://localhost:8080/api/v1/blog

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  _url: string = '../assets/data/blog-data.json'; //API url - Mock data for test

  constructor(private _http: HttpClient) {}

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof Error) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, body was: ${error.error}`
      );
    }
    return EMPTY;
  }

  // GET all blog in DB
  getAllBLog(params: any): Observable<any> {
    return this._http
      .get<Blog[]>(restFullApiUrl, { params }) //Fetch data
      .pipe(
        // Handle error
        catchError(this.handleError)
      );
  }

  // GET single blog by id
  getBlogById(id: number): Observable<Blog> {
    const urlBlogId = `${restFullApiUrl}/${id}`;
    console.log(urlBlogId);
    return this._http.get<Blog>(urlBlogId).pipe(catchError(this.handleError));
  }

  addNewBlog(newBlog: Blog): Observable<Blog> {
    const urlAdd = `${restFullApiUrl}/add`;
    return this._http
      .post<Blog>(urlAdd, newBlog)
      .pipe(catchError(this.handleError));
  }

  deleteBlog(id: number): Observable<Blog> {
    const urlBlogId = `${restFullApiUrl}/${id}`;
    return this._http
      .delete<Blog>(urlBlogId)
      .pipe(catchError(this.handleError));
  }
}

import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { EMPTY, Observable} from 'rxjs'
import {catchError} from 'rxjs/operators'

import { Blog } from './blog';
import {Blogs} from './mock-blog-data' // static data use test service

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  _url:string = "../assets/data/blog-data.json"; //API url
  //baseUrl = "http:localhost:4200/"
  constructor(private _http:HttpClient) { }

  handleError(error:any){
    if (error.error instanceof Error) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
      return EMPTY;
   
  }
  // GET all blog in DB
  getAllBLog():Observable<Blog[]>{
    return this._http.get<Blog[]>(this._url)          //Fetch data
    .pipe(                                            // Handle error
      catchError((error:HttpErrorResponse) =>
        this.handleError(error)
      )
    )
  }

  // GET single blog by id
  getBlogById(id:number):Observable<any>{
    const urlBlog = `/blog/${id}`//`${this.baseUrl}blog/${id}`
    return this._http.get<Blog>(urlBlog)
    .pipe(                                            // Handle error
      catchError((error:HttpErrorResponse) =>
        this.handleError(error)
      )
    )
  }
}

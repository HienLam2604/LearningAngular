import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { EMPTY, Observable} from 'rxjs'
import {catchError} from 'rxjs/operators'

import { product } from '../models/product';
import { Blog } from '../models/blog';
import { environment } from 'src/environments/environment';

const baseUrl = `${environment.apiUrl}`  // Get url from [Path: /src/environments/environment.ts]
const restFullApiUrl = `${environment.restApiUrl}`  // Get url from [Path: /src/environments/environment.ts]

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  _url:string = "../assets/data/blog-data.json"; //API url - Mock data for test
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
  getBlogById(id:number):Observable<Blog>{
    const urlBlogId = `${baseUrl}/blog/${id}`
    return this._http.get<Blog>(urlBlogId)
    .pipe(                                            // Handle error
      catchError((error:HttpErrorResponse) =>
        this.handleError(error)
      )
    )
  }

  // GET product from Restfull API - Java Spring
  getAllProduct():Observable<product[]>{
    return this._http.get<product[]>(restFullApiUrl)
    .pipe(catchError((error:HttpErrorResponse)=>
    this.handleError(error)
    ))
  }
  // GET single blog by id
  getProductById(id:number):Observable<product>{
   const url = `${restFullApiUrl}/product/${id}`
   return this._http.get<product>(url)
   .pipe(                                            // Handle error
     catchError((error:HttpErrorResponse) =>
       this.handleError(error)
     )
   )
 }
 
}

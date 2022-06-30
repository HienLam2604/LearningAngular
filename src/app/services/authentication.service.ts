import { User } from './../models/user';
import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpRequest,
} from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { catchError, map } from 'rxjs/operators';

const AUTH_API = 'http://localhost:8080/auth';
const role: any = [];
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private _http: HttpClient, private router: Router) {}
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof Error) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: ${error.error}`
      );
    }
    return EMPTY;
  }
  signUp(user: User): Observable<User> {
    const url = `${AUTH_API}/signup`;
    return this._http.post<User>(url, user).pipe(catchError(this.handleError));
  }
  login(username: string, password: string): Observable<any> {
    const payload = JSON.stringify({ username: username, password: password });
    return this._http.post<any>(AUTH_API, payload, httpOptions).pipe(
      map((data) => {
        let token = 'Bearer ' + data.jwt;
        let username = data.username;
        let roles = data.roles;
        localStorage.setItem('access_token', token);
        localStorage.setItem('username', username);
        for (let i = 0; i < roles.length; i++) role.push(roles[i]);
        console.log(data);
        console.log(role);
        return data;
      })
    );
  }
  getToken() {
    return localStorage.getItem('access_token');
  }
  isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }
  isAdmin() {
    return this.isLoggedIn() && role.includes('ROLE_ADMIN');
  }
  logOut() {
    let removeToken = localStorage.removeItem('access_token');
    let removeToken1 = localStorage.removeItem('username');
    role.splice(0, role.length);
    if (removeToken == null && removeToken1 == null) {
      this.router.navigate(['/login']);
    }
  }

  getAllUser() {
    let url: string = 'http://localhost:8080/admin';
    return this._http.get<User[]>(url).pipe(catchError(this.handleError));
  }
}

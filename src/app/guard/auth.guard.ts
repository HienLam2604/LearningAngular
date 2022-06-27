import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {}

  canActivate(): boolean {
    // Have token and logged
    if (localStorage.getItem('access_token') === null) {
      window.alert('Access not allowed!');
      this.router.navigate(['login']);
      return false;
    }

    // not logged in so redirect to login page
    return true;
  }
}

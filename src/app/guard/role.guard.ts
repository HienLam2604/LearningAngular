// src/app/auth/role-guard.service.ts
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
@Injectable()
export class RoleGuard implements CanActivate {
  constructor(public auth: AuthenticationService, public router: Router) {}
  canActivate(): boolean {
    const expectedRole = 'admin';
    const role = localStorage.getItem('username');
    if (!this.auth.isLoggedIn() || role !== expectedRole) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}

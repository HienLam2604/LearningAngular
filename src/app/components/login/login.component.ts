import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.checkLogin();
  }
  checkLogin() {
    if (localStorage.getItem('access_token')) {
      this.router.navigate(['']);
    }
  }
  login(result: any) {
    let username: string = result.username;
    let password: string = result.password;
    this.authService.login(username, password).subscribe((data) => {
      return data;
    });
    this.router.navigate(['']);
  }
}

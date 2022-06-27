import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  constructor(private router: Router) {}
  title: string = 'This is homepage';
  username: string = '' + localStorage.getItem('username');
  ngOnInit(): void {}
  logOut() {
    localStorage.removeItem('username');
    localStorage.removeItem('access_token');
    this.router.navigate(['login']);
  }
}

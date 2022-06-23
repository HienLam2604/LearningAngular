import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  constructor() {}
  title: string = 'This is homepage';
  username: string = '' + localStorage.getItem('username');
  ngOnInit(): void {}
  logOut() {
    localStorage.removeItem('username');
    localStorage.removeItem('access_token');
  }
}

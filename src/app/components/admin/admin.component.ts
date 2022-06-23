import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  constructor(private authService: AuthenticationService) {}
  users: User[] = [];
  ngOnInit(): void {
    this.authService.getAllUser().subscribe((data) => {
      this.users = data;
    });
  }
}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  providers: [UserService, DataService],
})
export class UserComponent implements OnInit {
  user: { name: string } = { name: 'Max' };
  isLoggedIn = false;
  data: string | unknown;

  constructor(
    private userService: UserService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.user = this.userService.user;
    this.dataService.getDetails().then((data) => {
      this.data = data;
    });
  }
}

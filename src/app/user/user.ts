import { Component } from '@angular/core';
import { DUMMY_USERS } from '../DUMMY_USERS';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  user = DUMMY_USERS[0];
}

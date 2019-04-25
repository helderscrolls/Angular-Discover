import { Injectable } from '@angular/core';
import { User } from '../classes/user';

@Injectable()
export class UserService {
   createUser(user: User) {
       console.log('User Name: ' + user.userName);
       console.log('Email: ' + user.email);
   }
} 
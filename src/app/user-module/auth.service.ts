import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable({
  providedIn: 'root' // of 'UserModule' om 1 instantie te hebben die enkel in UserModule beschikbaar is
})
export class AuthService {
  currentUser: IUser;

  loginUser(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      userName: userName,
      firstName: 'Avl',
      lastName: 'v la'
    };
  }

  isAuthenticated() {
    return !!this.currentUser;
  }
}

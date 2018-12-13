import { Injectable } from '@angular/core';
import { IUser } from './user.model';
import { UserModule } from './user.module';

@Injectable({
  providedIn: UserModule // of 'root' om 1 instantie te hebben die overal in de app beschikbaar is
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

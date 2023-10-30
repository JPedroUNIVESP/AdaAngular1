import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly username = 'admin';
  private readonly password = 'admin';

  constructor() { }

  login(user: string, pass: string): boolean {
    return user === this.username && pass === this.password;
  }

}

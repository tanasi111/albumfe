import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  public login(username: string, email: string) {

    console.log('username: ' + username);
    console.log('email: ' + email);

  }

}

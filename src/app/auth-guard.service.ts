import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor() { }

  canActivate(): boolean {
    return this.logedIn();
  }

  logedIn(): boolean {
    const logedIn: string = window.localStorage.getItem('loged_in');
    if (logedIn === 'LOGED_IN') {
      return true;
    } else {
      return false;
    }
  }
}

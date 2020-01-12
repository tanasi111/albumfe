import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  API_URL = 'https://jsonplaceholder.typicode.com';
  // private httpOptions: any;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
    // this.httpOptions = {
    //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    // };
  }

  public login(username: string, email: string) {
    return this.http.get(`${this.API_URL}/users?username=${username}&email=${email}`);
  }

  public logout() {
    window.localStorage.removeItem('loged_in');
    this.router.navigate(['/']);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('Antonette', [Validators.required]),
    email: new FormControl('Shanna@melissa.tv', [Validators.required]),
  });
  loginError: boolean;

  constructor(
    private loginService: LoginService,
    private router: Router,
  ) {
    this.loginError = false;
  }

  ngOnInit() { }

  login() {
    this.loginService.login(this.loginForm.value.username, this.loginForm.value.email)
      .subscribe(
        data => {
          const user: any = data;
          if (user.length === 1) {
            window.localStorage.setItem('loged_in', 'LOGED_IN');
            this.router.navigate(['/albums']);
          } else {
            this.loginError = true;
          }
        },
        err => console.log(err)
      );
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
  });

  constructor(private loginService: LoginService) { }

  ngOnInit() { }

  login() {
    this.loginService.login(this.loginForm.value.username, this.loginForm.value.email)
      .subscribe(
        response => console.log(response),
        err => console.log(err)
      );
  }

}

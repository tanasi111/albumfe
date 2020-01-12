import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login/login.service';
import { AuthGuardService } from 'src/app/auth-guard.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private authGuard: AuthGuardService
  ) { }

  ngOnInit() {
  }

}

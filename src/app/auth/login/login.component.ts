import { Component, OnInit } from '@angular/core';
import { LoginUserDto } from "../../api/auth-service/models/login-user-dto";
import { AuthService } from 'src/app/api/auth-service/services';
import { Router } from '@angular/router';
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  data: LoginUserDto = {
    email: '',
    password: ''
  };

  constructor(
    private authService: AuthService,
    public router: Router,
    public cookieService: CookieService) { }

  ngOnInit(): void {
  }

  login() {
    const body = {
      email: this.data.email,
      password: this.data.password
    }
    this.authService.usersControllerLogin({body})
    .subscribe((data) => {
      this.cookieService.set('token', data.token);
      this.router.navigateByUrl('users-data');
    },
    (err) => {

    })
  }

}

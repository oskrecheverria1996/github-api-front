import { Component, OnInit } from '@angular/core';
import { LoginUserDto } from "../../api/nest-service/models/login-user-dto";
import { AuthService } from 'src/app/api/nest-service/services';
import { Router } from '@angular/router';
import { JwtSessionService } from 'src/app/shared/common/jwt-session.service';
import { NotificationsService } from 'src/app/shared/common/notifications.service';

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
    public jwtService: JwtSessionService,
    private notificationsService: NotificationsService,) { }

  ngOnInit(): void {
  }

  login() {
    const body = {
      email: this.data.email,
      password: this.data.password
    }
    this.authService.usersControllerLogin({body})
    .subscribe((data) => {
      this.jwtService.login(data.token);
      this.router.navigateByUrl('home');
    },
    (err) => {
      this.notificationsService.error(err.error.message, 'Error');
    })
  }

}

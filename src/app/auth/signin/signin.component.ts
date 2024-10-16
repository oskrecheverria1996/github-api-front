import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateUserDto } from 'src/app/api/nest-service/models';
import { AuthService } from 'src/app/api/nest-service/services';
import { JwtSessionService } from 'src/app/shared/common/jwt-session.service';
import { NotificationsService } from 'src/app/shared/common/notifications.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  newUser: CreateUserDto = {
    email: '',
    name: '',
    password: '',
  };

  constructor(
    private authService: AuthService,
    public router: Router,
    public jwtService: JwtSessionService,
    private notificationsService: NotificationsService,
  ) { }

  ngOnInit(): void {
  }

  register(): void {
    this.authService.authControllerCreate({body: this.newUser})
    .subscribe((res) => {

    },
    (err) => {
      this.notificationsService.error(err.error.message, 'Error');
    })
  }

}

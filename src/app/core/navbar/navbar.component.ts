import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { JwtSessionService } from 'src/app/shared/common/jwt-session.service';
import { WebSocketService } from 'src/app/api/web-socket.service';
import { NotificationsService } from 'src/app/api/nest-service/services';
import { finalize } from 'rxjs';
import { Page } from 'src/app/shared/models/page.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
  public focus;
  public listTitles: any[];
  public location: Location;
  public user: any;
  notificationsNumber: number = 0;
  notificationsList: any = [];
  notificationsPage: number = 1;
  notificationsLimit: number = 10;
  pageInfo: Page;

  constructor(
    location: Location,
    private element: ElementRef, 
    private router: Router, 
    private jwtService: JwtSessionService, 
    private socketService: WebSocketService, 
    private notificationsService: NotificationsService) {

    this.location = location;
    socketService.outEven.subscribe(res => {
      this.setNotifications(res);
    });

  }

  ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);
    this.getUserName();
    this.socketService.emitEvent();
    // this.getNotificationsList(this.notificationsLimit, this.notificationsPage);
  }
  
  getTitle(){
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if(titlee.charAt(0) === '#'){
        titlee = titlee.slice( 1 );
    }

    for(var item = 0; item < this.listTitles.length; item++){
        if(this.listTitles[item].path === titlee){
            return this.listTitles[item].title;
        }
    }
    return 'Dashboard';
  }
  
  getUserName() {
    this.user = this.jwtService.decodeJwt();
  }

  logout() {
    this.jwtService.logout();
  }

  setNotifications(number) {
    this.notificationsNumber = number;
    this.notificationsList = [];
    this.notificationsPage = 1;
    this.getNotificationsList(this.notificationsLimit, this.notificationsPage);
  }
  
  getNotificationsList(limit, page) {
    this.notificationsService.notificationsControllerAllNotifications({limit, page, search: '{}'})
      .subscribe((res) => {
        if(res.content.length > 0) {
          this.notificationsList = this.notificationsList.concat(res.content);
        }
        this.pageInfo = res.page;
        this.notificationsPage = +res.page.number;
      })
  }

  updateNotificationsState() {
    this.notificationsService.notificationsControllerUpdateNotifications()
      .pipe(finalize(() => this.socketService.emitEvent()))
      .subscribe((res) => {
        console.log(res);
      })
  }

  

  @HostListener('scroll', ['$event'])
  onScroll(event: any) {
    if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight - 1) {
      // code
      this.getNotificationsList(this.notificationsLimit, this.notificationsPage + 1);
    }
  }


}

import { Component, OnInit } from '@angular/core';
import { Subscription, Observable } from "rxjs";
import { UsersDataFacade } from "./users-data.facade";
import {
  NgbModal,
  NgbModalOptions,
  NgbModalRef,
} from "@ng-bootstrap/ng-bootstrap";
import { NavigationExtras, Router } from "@angular/router";
import { FormControl, Validators, ValidatorFn } from '@angular/forms';
import { NotificationsService } from "../../shared/common/notifications.service";
import { InvalidNameDirective } from "../../shared/directives/invalid-name.directive";

@Component({
  selector: 'app-users-data',
  templateUrl: './users-data.component.html',
  styleUrls: ['./users-data.component.scss']
})
export class UsersDataComponent implements OnInit {

  subscriptions: Subscription = new Subscription();
  userslist$: Observable<any[]>;
  isLoading$: Observable<boolean>;
  searchInput = new FormControl('', [Validators.required, Validators.minLength(4), InvalidNameDirective()]);

  constructor(
    public usersDataFacade: UsersDataFacade,
    private modalService: NgbModal,
    private router: Router,
    private notificationsService: NotificationsService
  ) {
    this.userslist$ = this.usersDataFacade.getListUsers$();
    this.isLoading$ = this.usersDataFacade.isLoading$();
  }
  
  ngOnInit(): void {
  }

  onPageChange(event) {

  }
  
  edit(event) {
    localStorage.setItem('currentUser', JSON.stringify(event.data));
    this.router.navigate(['users-data/user/', event.data.login]);
  }

  search(value) {
    this.usersDataFacade.getListUsers(value);
    // if(value !== 'doublevpartners') {
    //   this.usersDataFacade.getListUsers(value);
    // } else {
    //   this.notificationsService.showToast('warning', "La busqueda 'doublevpartners' no puede ser realizada")
    // }
  }

}

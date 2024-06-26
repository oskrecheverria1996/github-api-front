import { Component, OnInit, ViewChild } from '@angular/core';
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
import { Chart } from "chart.js";
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';
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
  chart: any;
  @ViewChild('popOver') public popValid: NgbPopover;

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
  }

  showAlert() {
    if (this.searchInput.invalid) {
      this.popValid.open();
    } else {
      this.popValid.close();
    }
  }
  // createChart(data){
  
  //   let labels = data.map(x => x.login);
  //   // let followers = data.map(x => x.login);

  //   this.chart = new Chart("MyChart", {
  //     type: 'bar', //this denotes tha type of chart

  //     data: {// values on X-Axis
  //       labels: labels, 
	//        datasets: [
  //         {
  //           label: "Seguidores",
  //           data: ['467','576', '572', '79', '92',
	// 							 '574', '573', '576'],
  //           backgroundColor: 'blue'
  //         },
  //       ]
  //     },
  //     options: {
  //       aspectRatio:2.5
  //     }
      
  //   });
  // }

}

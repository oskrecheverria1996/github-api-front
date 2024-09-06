import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
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
import { ICrudComponent } from 'src/app/shared/common/crud/crud-component.interface';
import { ListComponentBase } from 'src/app/shared/common/crud/list/list-component-base.class';
import { ModalService } from 'src/app/shared/services/modal.service';
import { EditUserComponent } from "./edit-user/edit-user.component";
import { NewUserComponent } from './new-user/new-user.component';

@Component({
  selector: 'app-users-data',
  templateUrl: './users-data.component.html',
  styleUrls: ['./users-data.component.scss']
})

export class UsersDataComponent 
    extends ListComponentBase<any>
    implements OnInit, ICrudComponent<any> {

  subscriptions: Subscription = new Subscription();
  userslist$: Observable<any[]>;
  isLoading$: Observable<boolean>;
  searchInput = new FormControl('', [Validators.required, Validators.minLength(4), InvalidNameDirective()]);
  chart: any;
  @ViewChild('popOver') public popValid: NgbPopover;

  constructor(
    public usersDataFacade: UsersDataFacade,
    private modalService: ModalService,
    private router: Router,
    private notificationsService: NotificationsService,
  ) {
    super(usersDataFacade)
    this.userslist$ = this.usersDataFacade.getList$();
    this.isLoading$ = this.usersDataFacade.isLoading$();
  }

  ngOnInit(): void {
    this.loadByCriteria()
  }

  create(element?: any): void {
    this.modalService.loadComponent(NewUserComponent, 
      {  },
      { size: "lg", container: "body" }
    );
  }

  editar(event: any): void {
    let user = {
      username: 'Oscar',
      type: 'Desarrollador',
      description: 'Desarrollador'
    }
    this.modalService.loadComponent(EditUserComponent, 
      user,
      { size: "lg", container: "body" }
    );
  }

  delete(element: any, event: Event) {
    throw new Error('Method not implemented.');
  }

  clone(element: any, event: Event) {
    throw new Error('Method not implemented.');
  }

  onPageChange(event) {

  }
  
  edit(event) {
    localStorage.setItem('currentUser', JSON.stringify(event.data));
    this.router.navigate(['users-data/user/', event.data.login]);
  }

  search(value) {
    this.usersDataFacade.loadList(value);
  }

  showAlert() {
    if (this.searchInput.invalid) {
      this.popValid.open();
    } else {
      this.popValid.close();
    }
  }

  createChart(data){
  
    let labels = data.map(x => x.login);
    // let followers = data.map(x => x.login);

    this.chart = new Chart("MyChart", {
      type: 'bar',

      data: {
        labels: labels, 
	       datasets: [
          {
            label: "Seguidores",
            data: ['467','576', '572', '79', '92',
								 '574', '573', '576'],
            backgroundColor: 'blue'
          },
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }

}

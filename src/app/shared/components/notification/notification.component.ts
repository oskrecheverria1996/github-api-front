import { Component, Input, OnInit } from '@angular/core';
import { NotificationEntity } from 'src/app/api/nest-service/models';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  @Input() notification: any;

  constructor() { }

  ngOnInit(): void {
  }

}

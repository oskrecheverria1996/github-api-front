import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from "@angular/animations";

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  // animations: [
  //   trigger('loading', [
  //     state('active', style({
  //       opacity: '0'
  //     })),
  //     transition('* => *', animate('200ms ease'))
  //   ])
  // ]
})
export class LoadingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}

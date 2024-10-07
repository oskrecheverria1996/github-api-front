import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/home', title: 'Home',  icon:'ni-single-02 text-yellow', class: '' },
  { path: '/products', title: 'Productos',  icon:'ni-single-02 text-yellow', class: '' },
  { path: '/categories', title: 'Categories',  icon:'ni-single-02 text-yellow', class: '' },
  { path: '/users-data', title: 'Usuarios Github',  icon:'ni-single-02 text-yellow', class: '' }, 
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}

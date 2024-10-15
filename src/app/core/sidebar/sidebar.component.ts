import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/home', title: 'Home',  icon:'fas fa-home', class: '' },
  { path: '/products', title: 'Productos',  icon:'fas fa-shopping-cart', class: '' },
  { path: '/categories', title: 'Categories',  icon:'fas fa-bookmark', class: '' },
  { path: '/users-data', title: 'Usuarios Github',  icon:'fab fa-github', class: '' }, 
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

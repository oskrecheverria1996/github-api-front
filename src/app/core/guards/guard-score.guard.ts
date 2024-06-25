import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScoreGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.getCurrentUser();
  }

  getCurrentUser() {
   let score = JSON.parse(localStorage.getItem('currentUser')).score;
   if(score > 30) {
    return true;
   } else {
    return false;
   }
  }
  
}

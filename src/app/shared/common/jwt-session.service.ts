import { Injectable } from '@angular/core';
import { CookieService } from "ngx-cookie-service";
import { jwtDecode } from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class JwtSessionService {

  constructor(public cookieService: CookieService) { }

  login(token) {
    this.cookieService.set('token', token);
  }

  logout() {
    this.cookieService.delete('token');
  }

  decodeJwt() {
    const jwtToken = jwtDecode(this.cookieService.get('token'));
    return jwtToken;
  }

}

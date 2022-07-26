import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor(private router: Router,) { }

  // set token in local storage
  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  //get token in local storage
  getToken() {
    return localStorage.getItem('token');
  }

  //set user in local storage
  setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  //get user from local storage
  getUser(): Observable<any> {
    return JSON.parse(localStorage.getItem('user'));
  }

  //remove user from local storage
  removeUser() {
    localStorage.removeItem('user');
  }

  //remove token from local storage
  removeToken() {
    localStorage.removeItem('token');
  }

  //check if user is logged in
  isLoggedIn() {
    return !!this.getUser();
  }

  //logout user
  logout() {
    this.removeUser();
    this.removeToken();
    // navigate to login page
     this.router.navigate(['/login']);
  }


}

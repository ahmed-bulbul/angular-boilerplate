import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LocalstorageService {
  clearTimeout: any;

  constructor(private router: Router) {}

  // set token in local storage
  setToken(token: string) {
    localStorage.setItem("token", token);
  }

  //get token in local storage
  getToken() {
    return localStorage.getItem("token");
  }

  //set user in local storage
  setUser(user: any) {
    localStorage.setItem("user", JSON.stringify(user));
  }

  //get user organization
  getUserOrganizationId() {
    return this.getUser().organization?.id;
  }

  //get user from local storage
  getUser() {
    return JSON.parse(localStorage.getItem("user"));
  }

  //check user role contains
  getUserRoles() {
    let roles = "";
    let loginUser = this.getUser();
    if (loginUser) {
      let authorities = loginUser.roles;
      authorities.forEach((element) => {
        roles = roles + element.authority + ",";
      });
    }
    return roles;
  }

  // check roleName is exits
  checkRoleIsExists(roleName : string){
    let roles = this.getUserRoles();
    if(roles.includes(roleName)){
      return true;
    }
    return false;
  }

  //remove user from local storage
  removeUser() {
    localStorage.removeItem("user");
  }

  //remove token from local storage
  removeToken() {
    localStorage.removeItem("token");
  }

  //set menu in local storage
  setMenu(menu: any) {
    localStorage.setItem("menu", JSON.stringify(menu));
  }

  //get menu from local storage
  getMenu() {
    return JSON.parse(localStorage.getItem("menu"));
  }

  //check if user is logged in
  isLoggedIn() {
    return !!this.getUser();
  }

  //logout user
  logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    if (this.clearTimeout) {
      clearTimeout(this.clearTimeout);
    }
    return true;
  }
}

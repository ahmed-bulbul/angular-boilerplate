import { LoginService } from 'src/app/login/services/login.services';
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";
import { HeaderService } from "./header.service";
import { Subscription } from 'rxjs';
import { LocalstorageService } from '../security/service/localstorage.service';
import Swal from 'sweetalert2';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit, OnDestroy {


  public baseUrl = environment.baseUrl;

  public loginStatusSubject:boolean = false;
  public currentUserSubject:any;
  public user:any;

  constructor(
    private headerService: HeaderService,
    private router: Router,
    private loginService:LoginService,
    private localstorageService:LocalstorageService) {

      // this is behaviour subject which will emit true or false
    this.loginService.loginStatusSubject.subscribe(res=>{
      console.log('@Call for login or not by subscriber '+res);
      this.loginStatusSubject = res;
    },err=>{
      console.log(err);
    });

    this.loginService.currentUserSubject.subscribe(res=>{
      this.currentUserSubject = res;
    },err=>{
      console.log(err);
    })


  }

  ngOnInit() {

    this.getCurrentUser();


  }

  getCurrentUser() {
    let data =  this.localstorageService.getUser();
    if(data){
      this.user = data;
    }else{
      this.user = null;
    }
  }

  logout() {
    this.localstorageService.logout();
    //swal
    Swal.fire({
      title: "Logout",
      text: "You have been logged out successfully",
      icon: "success",
      showConfirmButton: false,
      timer: 1000,
    }).then(() => {
      this.router.navigate(['/login']);
    });
  }

  ngOnDestroy() {

  }


}

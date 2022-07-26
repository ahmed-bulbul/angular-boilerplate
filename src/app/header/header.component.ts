import { LoginService } from 'src/app/login/services/login.services';
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";
import { HeaderService } from "./header.service";
import { Subscription } from 'rxjs';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit, OnDestroy {


  public baseUrl = environment.baseUrl;

  public loginStatusSubject:boolean = false;
  public currentUserSubject:any;
  subscription : Subscription;

  constructor(private headerService: HeaderService, private router: Router,private loginService:LoginService) {

    this.loginService.loginStatusSubject.subscribe(res=>{
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


  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}

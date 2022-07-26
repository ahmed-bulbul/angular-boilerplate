import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login/services/login.services';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  public loginStatusSubject:boolean = false;
  public currentUserSubject:any;

  constructor(private router: Router,private loginService:LoginService) {

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

  ngOnInit(): void {
  }

}

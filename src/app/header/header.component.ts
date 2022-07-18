import { LoginService } from 'src/app/login/services/login.services';
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";
import { HeaderService } from "./header.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {


  public baseUrl = environment.baseUrl;

  public isLoggedIn = false;
  public user: any;

  constructor(private headerService: HeaderService, private router: Router,private login:LoginService) {}

  ngOnInit() {


  }


}

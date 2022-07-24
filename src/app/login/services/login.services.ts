import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Observable, Subject } from "rxjs";
import { retry } from "rxjs/operators";
import { environment } from "src/environments/environment";


@Injectable({
  providedIn: "root",
})
export class LoginService {
  baseUrl = environment.baseUrl;



  public loginStatusSubject = new Subject<boolean>();
  clearTimeout: any;

  constructor(private http: HttpClient, private toastr: ToastrService,private router: Router,) {}

  public sendGetRequest(apiURL, queryParams){
    console.log('@sendGetRequest');
    return this.http.get<any>(apiURL, {params: queryParams}).pipe( retry(3));
  }


}

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { BehaviorSubject, Observable, of, Subject, Subscription } from "rxjs";
import { retry } from "rxjs/operators";
import { LocalstorageService } from "src/app/security/service/localstorage.service";
import { environment } from "src/environments/environment";
import { Login } from "../model/login";
import { Register } from "../model/register";


@Injectable({
  providedIn: "root",
})
export class LoginService {


  baseUrl = environment.baseUrl+'/api/v1/auth';
  loginStatusSubject: BehaviorSubject<boolean>;
  loginStatusSubject$: Observable<boolean>;
  currentUser$: Observable<any>;
  currentUserSubject: BehaviorSubject<any>;
  unsubscribe: Subscription[] = [];
  clearTimeout: any;



  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private router: Router,
    private localstorageService:LocalstorageService
    ) {
    this.loginStatusSubject = new BehaviorSubject<boolean>(false);
    this.loginStatusSubject$ = this.loginStatusSubject.asObservable();
    this.currentUserSubject = new BehaviorSubject<Object>(undefined);
    this.currentUser$ = this.currentUserSubject.asObservable();

  }

  public login(formData:Login): Observable<Object>{
    return this.http.post(`${this.baseUrl}`+'/login', formData);

  }

  public register(formData:Register): Observable<Object>{
    return this.http.post(`${this.baseUrl}`+'/register', formData);
  }

  public forgotPassword(formData: any): Observable<Object> {
    return this.http.post(`${this.baseUrl}`+'/forgot-password', formData);
  }

  public resetPassword(formData: any): Observable<Object> {
    return this.http.post(`${this.baseUrl}`+'/reset-password', formData);
  }

}

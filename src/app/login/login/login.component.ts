import { LocalstorageService } from './../../security/service/localstorage.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { delay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Login } from '../model/login';
import { LoginService } from '../services/login.services';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public myForm: FormGroup;
  public baseUrl = environment.baseUrl;
  public formSubmitted = false;
  public formData: Login = new Login();
  public isLoading:boolean;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private loginService: LoginService,
    private router: Router,
    private spinnerService:NgxSpinnerService,
    private localStorageService:LocalstorageService
  ) { }

  ngOnInit() {

    if(this.localStorageService.isLoggedIn()){
      this.router.navigate(['/dashboard/admin']);
    }

    this._initForm();

    //myForm data assign to formData variable
    this.myForm.valueChanges.subscribe(data => {
      this.formData = data;
    })

  }

  // Initialize form function
  _initForm(){
    this.myForm=this.formBuilder.group({
      username:["",Validators.required],
      password: ['', [Validators.minLength(4),  Validators.required]],
    });
  }

  get f() { return this.myForm.controls; }


  onSubmit(){
    this.login();

  }

  login(){
    this.isLoading = true;
    //set time 30 seconds

    this.loginService.login(this.formData).subscribe( data =>{
      if(data['status'] === true){
        console.log(data['user']);
        this.setToken(data['accessToken'],data['user']);
        // this.loginService.loginStatusSubject.next(true);
        this.setObserver();
        Swal.fire({
         // login success
          icon: 'success',
          title: 'Login Successful',
          text: data['message'],
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          this.router.navigate(['/dashboard/admin']);
        });
        this.isLoading = false;
      }else{
        this.isLoading = false;
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: data['message'],
        });
      }
    },
    error => {
      this.isLoading = false;
      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: error.message,
      });
    });
  }

  setObserver (){
    this.loginService.loginStatusSubject.next(true);
    this.loginService.currentUserSubject.next(this.localStorageService.getUser());
  }

  //set token and user
  setToken(token:string,user:string){
    this.localStorageService.setToken(token);
    this.localStorageService.setUser(user);
  }



}

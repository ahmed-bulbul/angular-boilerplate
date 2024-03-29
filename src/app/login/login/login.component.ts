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
import { SharedService } from 'src/app/sharing/service/shared.service';
import { MatDialog } from '@angular/material/dialog';
import { WelcomeDialogComponent } from 'src/app/sharing/components/dialog/welcome/welcome-dialog.component';




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

  //declare input field error message
  public errorMsg:string;


  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private loginService: LoginService,
    private router: Router,
    private spinnerService:NgxSpinnerService,
    private localStorageService:LocalstorageService,
    private sharedService:SharedService,
    public dialog: MatDialog
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
      username:['',[Validators.required]],
      password: ['',[Validators.required]],
    });
  }

  get f() { return this.myForm.controls; }


  onSubmit(){
    this.formSubmitted = true;
    if(this.myForm.invalid){
      return;
    }
    this.login();

  }

  login(){
    this.isLoading = true;
    //set time 30 seconds

    this.loginService.login(this.formData).subscribe( data =>{
      if(data['status'] === true){
        console.log(data['user']);
        this.setToken(data['accessToken'],data['user']);
        this.setObserver();
        Swal.fire({
         // login success position right top small
          icon: 'success',
          title: 'Success',
          text: data['message'],
          showConfirmButton: false,
          timer: 1500,
          // small height width
          width: '450px',
        }).then(() => {
          this.router.navigate(['/dashboard/admin']);
        });
        this.isLoading = false;
      }
    },
    error => {
      this.isLoading = false;
      this.errorMsg=error;
      Swal.fire({
        title: 'Sorry...',
        text: error.error.message,
        icon: 'warning',
        width: '450px',
      });
      console.log(error);
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

  openDialog(text:string) {

    const dialogRef = this.dialog.open(WelcomeDialogComponent, {
      width: '250px',
      data: {text: text}

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });





  }



}

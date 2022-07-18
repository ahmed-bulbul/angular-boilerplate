import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { delay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Login } from '../model/login';
import { LoginService } from '../services/login.services';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public myForm: FormGroup;
  public baseUrl = environment.baseUrl;
  public formSubmitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private loginService: LoginService,
    private router: Router,
    private spinnerService:NgxSpinnerService
  ) { }

  ngOnInit() {
    this._initForm();

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
    
  }



}

import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { LocalstorageService } from 'src/app/security/service/localstorage.service';
import { SharedService } from 'src/app/sharing/service/shared.service';
import { MustMatch } from 'src/app/Utils/must-match.validator';
import { environment } from 'src/environments/environment';
import { LoginService } from '../services/login.services';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  public myForm: FormGroup;
  public baseUrl = environment.baseUrl;
  public formSubmitted = false;
  public isLoading:boolean;
  public token: string;

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

  ngOnInit(): void {
    this._initForm();
  }

  private _initForm() {
    const formOptions: AbstractControlOptions = { validators: MustMatch('password', 'confirmPassword') };
    this.myForm = this.formBuilder.group({
      token: [""],
      password: ["", Validators.required],
      confirmPassword: ["", Validators.required]
    }, formOptions);
  }

  onSubmit(){
    this.formSubmitted = true;
    if (this.myForm.invalid) {
      return;
    }
    this.resetPassword();

  }

  resetPassword(){
    this.isLoading = true;
    this.token=this.router.url.split("/")[3];
    this.myForm.value.token = this.token;
    this.loginService.resetPassword(this.myForm.value).subscribe(
      (response: any) => {
        if(response['status'] == true){
          this.toastr.success(response['message'], 'Success');
          this.router.navigate(['/login']);
        }
      },
      (error) => {
        //if status code 404
        if(error.status == 404){
          this.toastr.error(error.error.message, 'Error');
        }
        this.isLoading = false;
        this.toastr.error(error.error.message);
      }
    );

  }

  get f() { return this.myForm.controls; }

}

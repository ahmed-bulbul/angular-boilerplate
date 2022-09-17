import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { LocalstorageService } from 'src/app/security/service/localstorage.service';
import { SharedService } from 'src/app/sharing/service/shared.service';
import { environment } from 'src/environments/environment';
import { ForgotPassword } from '../model/forgot-password';
import { LoginService } from '../services/login.services';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  public myForm: FormGroup;
  public baseUrl = environment.baseUrl;
  public formSubmitted = false;
  public isLoading:boolean;
  public formData: ForgotPassword = new ForgotPassword();

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
    this.myForm.valueChanges.subscribe((data) => {
      this.formData = data;
    });

  }
  private _initForm() {
    this.myForm = this.formBuilder.group({
      email: ["", Validators.required]
    });
  }

  onSubmit(){

    this.formSubmitted = true;
    if (this.myForm.invalid) {
      console.log(this.myForm.value);
      return;
    }
    this.forgotPassword();

  }

  forgotPassword(){
    this.spinnerService.show();
    this.loginService.forgotPassword(this.myForm.value).subscribe(
      (response: any) => {
        if(response['status'] == true){
          this.toastr.success(response['message'], 'Success');
          this.router.navigate(['/login']);
        }
      },
      (error) => {
        this.spinnerService.hide();
        this.toastr.error(error.error.message);
      }
    );
  }

  get f() { return this.myForm.controls; }

}

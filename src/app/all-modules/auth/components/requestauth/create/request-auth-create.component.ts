import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BaseModule } from 'src/app/all-modules/base/model/BaseModule.model';
import { SharedService } from 'src/app/sharing/service/shared.service';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'app-request-auth-create',
  templateUrl: './request-auth-create.component.html',
  styleUrls: ['./request-auth-create.component.css']
})
export class RequestAuthCreateComponent implements OnInit {

  public baseModule:BaseModule[];

  public baseUrl = environment.baseUrl;
  public formGroup:FormGroup;

  constructor(private formBuilder: FormBuilder,private datePipe: DatePipe,
    private sharedService:SharedService,private authService:AuthService,private router: Router) { }

  ngOnInit(): void {
    this.getBaseModule();
  }

  onSubmit(){

    this.initForm();

  }

  initForm(){
    this.formGroup = this.formBuilder.group({
      id: [''],
      authority: ['', [Validators.required]],
      chkAuthorizationChar: ['', [Validators.required]],
      module: [''],
      isActive:['',[Validators.required]],
    });

  }

  //get checkbox data of baseModule
  _getBaseModuleFormData() {

  }




  getBaseModule(){
    const url = this.baseUrl+ '/api/v1/shared/baseModule/getModule';
    const queryParams: any = {};
    this.sharedService.sendGetRequest(url,queryParams).subscribe((data: any) => {
      this.baseModule = data.data;

    });
  }

}

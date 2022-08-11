import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BaseModule } from 'src/app/all-modules/base/base.module';
import { SharedService } from 'src/app/sharing/service/shared.service';
import { environment } from 'src/environments/environment';
import { RequestAuthCreateDTO } from '../../../dto/RequestAuthCreateDTO.model';
import { RequestAuth } from '../../../model/RequestAuth.model';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'app-request-auth-edit',
  templateUrl: './request-auth-edit.component.html',
  styleUrls: ['./request-auth-edit.component.css']
})
export class RequestAuthEditComponent implements OnInit {

  public baseUrl = environment.baseUrl;

  public formGroup:FormGroup;


  public baseModule :BaseModule[];
  public requestAuth : RequestAuth[]=[];
  //public produceFormCheckBoxData = new Array();
  public requestAuthCreateDTO : RequestAuthCreateDTO;
  public isLoading:boolean;



  constructor(private formBuilder: FormBuilder,private datePipe: DatePipe,
    private sharedService:SharedService,private authService:AuthService,private router: Router) { }

  ngOnInit(): void {
    this.initForm();
    this.getBaseModule();
    this.getAllByAuthority('ROLE_USER');
  }

  initForm(){
    this.formGroup = this.formBuilder.group({
      id: [''],
      authority: ['', [Validators.required]],
      chkAuthorizationChar: [''],
      module: [''],
      isActive:[''],
    });

  }

  onSubmit(){

  }

  getRole(){

  }

  resetForm(){

  }

  getBaseModule(){
    const url = this.baseUrl+ '/api/v1/shared/baseModule/getModule';
    const queryParams: any = {};
    this.sharedService.sendGetRequest(url,queryParams).subscribe((res: any) => {

     this.baseModule = res.data;

    });
  }


  //get all by authority
  getAllByAuthority(authority){
    const url = this.baseUrl+ '/api/v1/shared/authModule/getRequestAuth/'+authority;
    const queryParams: any = {};
    this.sharedService.sendGetRequest(url,queryParams).subscribe((res: any) => {
      if(res.status ===true){
        this.requestAuth = res.data;
        console.log(this.requestAuth);

        //checked checkbox by get request auth matched by module and chkAuthorizationChar defined by id
        this.requestAuth.forEach(element => {
          this.formGroup.controls['chkAuthorizationChar'].setValue(element.chkAuthorizationChar);
          this.formGroup.controls['module'].setValue(element.module);
        })



      }

    });
  }



}

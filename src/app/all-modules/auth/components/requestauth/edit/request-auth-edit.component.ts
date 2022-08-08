import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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


  public baseModule :BaseModule[];
  public requestAuth : RequestAuth[]=[];
  //public produceFormCheckBoxData = new Array();
  public requestAuthCreateDTO : RequestAuthCreateDTO;
  public isLoading:boolean;
  public roles:[]= [];

  constructor(private formBuilder: FormBuilder,private datePipe: DatePipe,
    private sharedService:SharedService,private authService:AuthService,private router: Router) { }

  ngOnInit(): void {
    this.getBaseModule();
    this.getAllByAuthority('ROLE_USER');
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
        this.roles = res.data;
        console.log(this.roles);
      }

    });
  }



}

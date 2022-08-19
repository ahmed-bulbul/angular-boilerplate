import { catchError } from 'rxjs/operators';

import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsDatepickerNavigationViewComponent } from 'ngx-bootstrap/datepicker/themes/bs/bs-datepicker-navigation-view.component';
import { BaseModule } from 'src/app/all-modules/base/model/BaseModule.model';
import { Actions } from 'src/app/sharing/constants/actions.constant';
import { Action } from 'src/app/sharing/model/action';
import { SharedService } from 'src/app/sharing/service/shared.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { Permission } from '../../../model/permission';
import { RequestAuth } from '../../../model/RequestAuth.model';
import { AuthService } from '../../../service/auth.service';
import * as _ from 'lodash';
import { Role } from '../../../model/role';


@Component({
  selector: 'app-request-auth-create',
  templateUrl: './request-auth-create.component.html',
  styleUrls: ['./request-auth-create.component.css']
})
export class RequestAuthCreateComponent implements OnInit {

  public baseModule :BaseModule[];
  public requestAuth : RequestAuth[]=[];
  public produceFormCheckBoxData = new Array();
 // public requestAuthCreateDTO : RequestAuthCreateDTO;
  public isLoading:boolean;
  public formSubmitted = false;
  public roles :[]= [];
  actions: Action[] = Actions;
  permissions: Permission[] = [];
  private prm: Permission[];
  private oldPrm: Permission[];

  public isUpdateable: boolean = false;
  public isRoleSelected: boolean = false;


 permissionChange = new EventEmitter<Permission[]>();
 oldPermissions = new EventEmitter<Permission[]>();



  public baseUrl = environment.baseUrl;
  public formGroup:FormGroup;

  constructor(private formBuilder: FormBuilder,private datePipe: DatePipe,
  private sharedService:SharedService,private authService:AuthService,private router: Router) { }





  ngOnInit(): void {
    this.initForm();
    this.getBaseModule();
    this.getRole();

    this.permissionChange.subscribe((permissions: Permission[]) => {
      this.prm = permissions;
      console.log(this.prm);
    });
    this.oldPermissions.subscribe((permissions: Permission[]) => {
      this.oldPrm = permissions;
    });

  }

  selectAll(event: any): void {
    if (event.target?.checked) {
      this.baseModule.forEach((m) => {
        this.actions.map((a) => {
          this.permissions.push({
            module: m.code,
            action: a.code,
          });
        });
      });

      this.permissionChange.emit(this.permissions);
      return;
    }

    this.permissions = [];
    this.permissionChange.emit(this.permissions);
  }

  check(event: any, module: string, action: string): void {
    if (event.target?.checked) {
      this.permissions.push({
        module: module,
        action: action,
      });
    } else {
      let index = this.permissions.findIndex(
        (i) => i.module === module && i.action === action
      );
      if (index > -1) {
        this.permissions.splice(index, 1);
      }
    }

    console.log(this.permissions);

    this.permissionChange.emit(this.fortmatPermission(this.permissions));

  }

  validateCheckBox(module: string, action: string): boolean {
    return !!this.permissions.find(
      (i) => i.module === module && i.action === action
    );
  }

  fortmatPermission(permissions: Permission[]): Permission[] {

    return Object.entries(_.groupBy(permissions, (i) => i.module)).map(
      ([key, values]) => ({
        module: key,
        chkAuthorizationChar: values.map((i) => i.action).join(''),
      })
    );
  }


  onSubmit(){

    this.formSubmitted=true;
    if(this.isUpdateable){
      //update
      this.updateReqAuth();
    }else{
      //create
      this.createReqAuth();
    }


  }
  createReqAuth(){
    this.authService.createRequestAuth({
      requestAuthList : this.createPermissionsPayload(this.getAuhority)
    }).subscribe((res: any) => {
      if(res['status']==true){
        this.formSubmitted=false;
        Swal.fire({
          title: 'Success',
          text: res['message'],
          icon: 'success',
        })
      }
    } ,(err)=>{
      this.formSubmitted=false;
      console.log(err);
    })

  }

  updateReqAuth(){
    this.authService.updateRequestAuth({
      requestAuthList : this.createPermissionsPayload(this.getAuhority)
    }).subscribe((res: any) => {
      if(res['status']==true){
        this.formSubmitted=false;
        Swal.fire({
          title: 'Success',
          text: res['message'],
          icon: 'success',
        })
      }
    } ,(err)=>{
      this.formSubmitted=false;
      console.log(err);
    })

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

  getRole(){
    if(this.roles.length === 0){
      this.isLoading = true;
      const url = this.baseUrl+ '/api/v1/shared/authModule/getRole';
      const queryParams: any = {};
      this.sharedService.sendGetRequest(url,queryParams).subscribe((res: any) => {
        if(res.status ===true){
          this.isLoading = false;
          this.roles = res.data;
          console.log(this.roles);
        }
      },(err)=>{
        this.isLoading = false;
        console.log(err);
      });

    }
  }

  selectRole(event: any){
    this.permissions = [];
    //if empty then select all
    if(event.target.value === ''){
      this.isRoleSelected = false;
      return;
    }
    //get request auth list by authority
    this.isLoading = true;
    this.isRoleSelected = true;
    const url = this.baseUrl+ '/api/v1/shared/authModule/getRequestAuth'+'/'+event.target.value;
    const queryParams: any = {};
    this.sharedService.sendGetRequest(url,queryParams).subscribe((res: any) => {
      if(res.status ===true){
        this.isLoading = false;

        //updating ........previous request auth list or not
        if(res.data.length > 0){
          this.isUpdateable = true;
          const permissions= res.data;
          let x = permissions.map((i: any) => ({
            actions: i.chkAuthorizationChar.split(''),
            module: i.module,
          }));

          x.map((p: any) => {
            p.actions.map((action: any) => {
              this.permissions.push({
                module: p.module,
                action: action,
              });
            });
          });
          this.oldPermissions.emit(permissions);
        }
      }
    },(err)=>{
      this.isLoading = false;
      console.log(err);
    });
  }


  getBaseModule(){
    this.isLoading = true;
    const url = this.baseUrl+ '/api/v1/shared/baseModule/getModule';
    const queryParams: any = {};
    this.sharedService.sendGetRequest(url,queryParams).subscribe((res: any) => {
      this.isLoading = false;
     this.baseModule = res.data;

    },(err)=>{
      this.isLoading = false;
      console.log(err);
    });
  }


  createPermissionsPayload(role: string): any {
    const requestAuthList: any[] = [];
    //if prm is empty
    if(this.permissions.length === 0){
      Swal.fire({
        title: 'Info',
        text: 'Please select at least one permission',
        icon: 'info',
      });
      return;
    }
    this.prm.forEach((i) => {
      let newPermission: any = {
        authority: role,
        chkAuthorizationChar: i.chkAuthorizationChar,
        module: i.module,
      };

      const existingPermissionId = this.oldPrm
        ? this.oldPrm.find(
            (o) => o.authority === role && o.module === i.module
          )?.id
        : null;

      if (existingPermissionId) {
        newPermission.id = existingPermissionId;
      }

      requestAuthList.push(newPermission);
    });
    console.log(requestAuthList);
    return requestAuthList;
  }

  //get auth data from formGroup
  get getAuhority(){
    return this.formGroup.value.authority;
  }

  resetForm(){
    this.formGroup.reset();
  }

}

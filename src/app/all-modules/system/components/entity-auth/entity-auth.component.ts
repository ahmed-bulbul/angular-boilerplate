import { SystemEntity } from './../../model/SystemEntity.model';
import { DatePipe } from '@angular/common';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Actions } from 'src/app/sharing/constants/actions.constant';
import { Action } from 'src/app/sharing/model/action';
import { Permission } from 'src/app/all-modules/auth/model/permission';
import { SharedService } from 'src/app/sharing/service/shared.service';
import { environment } from 'src/environments/environment';
import { SystemService } from '../../service/system.service';
import * as _ from 'lodash';
import Swal from 'sweetalert2';
import { HeaderService } from 'src/app/header/header.service';

@Component({
  selector: 'app-entity-auth',
  templateUrl: './entity-auth.component.html',
  styleUrls: ['./entity-auth.component.css']
})
export class EntityAuthComponent implements OnInit {

  public isLoading:boolean;
  public formSubmitted = false;
  public roles :[]= [];
  actions: Action[] = Actions;
  permissions: Permission[] = [];
  private prm: Permission[];
  private oldPrm: Permission[];

  public isUpdateable: boolean = false;
  public isRoleSelected: boolean = false;

  public systemEntity : SystemEntity[]=[];

 permissionChange = new EventEmitter<Permission[]>();
 oldPermissions = new EventEmitter<Permission[]>();

 public baseUrl = environment.baseUrl;
 public formGroup:FormGroup;

  constructor(private formBuilder: FormBuilder,private datePipe: DatePipe,
    private headerService:HeaderService,
    private sharedService:SharedService,
    private systemService:SystemService,
    private router: Router) { }

  ngOnInit(): void {
    this.initForm();
    this.getSystemEntity();
    this.getRole();


    this.permissionChange.subscribe((permissions: Permission[]) => {
      this.prm = permissions;
      console.log(this.prm);
    });
    this.oldPermissions.subscribe((permissions: Permission[]) => {
      this.oldPrm = permissions;
    });

  }

  initForm(){
    this.formGroup = this.formBuilder.group({
      id: [''],
      authority: ['', [Validators.required]],
      chkAuthorizationChar: [''],
      entityName: [''],
      isActive:[''],
    });

  }

  getSystemEntity(){
    if(this.systemEntity.length === 0){
      this.headerService.isLoadingSubject.next(true);
      const queryParams: any = {};
      queryParams.pageNum = 1;
      queryParams.pageSize = 100;
      this.systemService.getSystemEntity(queryParams).subscribe((res: any) => {
        if(res.status === true){
          this.headerService.isLoadingSubject.next(false);
          this.systemEntity = res.data;
          console.log(this.systemEntity);
        }
      },(err)=>{
        this.headerService.isLoadingSubject.next(false);
        console.log(err);
      });

    }
  }

  getRole(){
    if(this.roles.length === 0){
      this.headerService.isLoadingSubject.next(true);
      const queryParams: any = {};
      this.sharedService.getRole(queryParams).subscribe((res: any) => {
        if(res.status ===true){
          this.headerService.isLoadingSubject.next(false);
          this.roles = res.data;
          console.log(this.roles);
        }
      },(err)=>{
        this.headerService.isLoadingSubject.next(false);
        console.log(err);
      });

    }
  }

  onSubmit(){
    this.formSubmitted=true;
    if(this.isUpdateable){
      //update
      this.updateReqAuth();
    }else{
      //create
     // this.createReqAuth();
    }

  }

  updateReqAuth(){

    this.systemService.updateEntityAuth({
      systemEntityAuthorizationList : this.createPermissionsPayload(this.getAuhority)
    }).subscribe((res: any) => {
      if(res['status']==true){
        this.formSubmitted=false;
        Swal.fire({
          title: 'Success',
          text: res['message'],
          icon: 'success',
        })
      }
    } ,error =>{
      this.formSubmitted=false;
      console.log(error);

      // if code is 403 pop up error message
      if(error.status === 403){
        Swal.fire({
          title: 'Error',
          text: "You don't have permission to update",
          icon: 'error',
        });
      }
      console.log(error);
    })

  }

  createPermissionsPayload(role: string): any {
    const systemEntityAuthorizationList: any[] = [];
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
        entityName: i.entityName,
      };

      const existingPermissionId = this.oldPrm
        ? this.oldPrm.find(
            (o) => o.authority === role && o.entityName === i.entityName
          )?.id
        : null;

      if (existingPermissionId) {
        newPermission.id = existingPermissionId;
      }

      systemEntityAuthorizationList.push(newPermission);
    });
    console.log(systemEntityAuthorizationList);
    return systemEntityAuthorizationList;
  }

  //get auth data from formGroup
  get getAuhority(){
    return this.formGroup.value.authority;
  }


  selectRole(event){

    this.permissions = [];
    //if empty then select all
    if(event.target.value === ''){
      this.isRoleSelected = false;
      return;
    }
    //get request auth list by authority
    this.headerService.isLoadingSubject.next(true);
    this.isRoleSelected = true;
    const queryParams: any = {};
    this.sharedService.getEntityAuthByAuthority(event.target.value,queryParams).subscribe((res: any) => {
      if(res.status ===true){
        this.headerService.isLoadingSubject.next(false);

        //updating ........previous request auth list or not
        if(res.data.length > 0){
          this.isUpdateable = true;
          const permissions= res.data;
          let x = permissions.map((i: any) => ({
            actions: i.chkAuthorizationChar.split(''),
            entityName: i.entityName,
          }));

          x.map((p: any) => {
            p.actions.map((action: any) => {
              this.permissions.push({
                entityName: p.entityName,
                action: action,
              });
            });
          });
          this.oldPermissions.emit(permissions);
        }
      }
    },(err)=>{
      this.headerService.isLoadingSubject.next(false);
      console.log(err);
    });

  }

  selectAll(event){

  }

  check(event: any, entityName: string, action: string): void {

    if (event.target?.checked) {
      this.permissions.push({
        entityName: entityName,
        action: action,
      });
    } else {
      let index = this.permissions.findIndex(
        (i) => i.entityName === entityName && i.action === action
      );
      if (index > -1) {
        this.permissions.splice(index, 1);
      }
    }

    console.log(this.permissions);

    this.permissionChange.emit(this.fortmatPermission(this.permissions));

  }
  validateCheckBox(entityName: string, action: string): boolean {
    return !!this.permissions.find(
      (i) => i.entityName === entityName && i.action === action
    );
  }

  fortmatPermission(permissions: Permission[]): Permission[] {

    return Object.entries(_.groupBy(permissions, (i) => i.entityName)).map(
      ([key, values]) => ({
        entityName: key,
        chkAuthorizationChar: values.map((i) => i.action).join(''),
      })
    );
  }

  resetForm(){
    this.formGroup.reset();
    this.permissions = [];
    this.isUpdateable = false;
    this.isRoleSelected = false;
  }



}

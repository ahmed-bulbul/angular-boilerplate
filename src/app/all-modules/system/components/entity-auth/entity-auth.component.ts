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
    private sharedService:SharedService,private systemService:SystemService,private router: Router) { }

  ngOnInit(): void {
    this.initForm();
    this.getSystemEntity();
    this.getRole();

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
      this.isLoading = true;
      const queryParams: any = {};
      queryParams.pageNum = 1;
      queryParams.pageSize = 100;
      this.systemService.getSystemEntity(queryParams).subscribe((res: any) => {
        if(res.status === true){
          this.isLoading = false;
          this.systemEntity = res.data;
          console.log(this.systemEntity);
        }
      },(err)=>{
        this.isLoading = false;
        console.log(err);
      });

    }
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

  }

  selectRole(event){

    this.permissions = [];
    //if empty then select all
    if(event.target.value === ''){
      this.isRoleSelected = false;
      return;
    }
    //get request auth list by authority
    this.isLoading = true;
    this.isRoleSelected = true;
    const url = this.baseUrl+ '/api/v1/shared/systemModule/getEntityAuth'+'/'+event.target.value;
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
      this.isLoading = false;
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



}

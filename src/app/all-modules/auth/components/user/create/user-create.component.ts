
import { FormControl, Validators } from '@angular/forms';

import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OperatingUnit } from 'src/app/all-modules/base/model/OperatingUnit.model';
import { Organization } from 'src/app/all-modules/base/model/Organization.model';
import { BaseService } from 'src/app/all-modules/base/service/base.service';
import { HeaderService } from 'src/app/header/header.service';
import { SharedService } from 'src/app/sharing/service/shared.service';
import { environment } from 'src/environments/environment';
import { Role } from '../../../model/role';
import { AuthService } from '../../../service/auth.service';
import { Pagination } from './../../../../../sharing/constants/pagination.constant';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { User } from '../../../model/user';
import { LocalstorageService } from 'src/app/security/service/localstorage.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  public formGroup: FormGroup;
  public user: User;
  public baseUrl = environment.baseUrl;
  public formSubmitted = false;
  public roles : Role[];
  public organizations : Organization[];
  public operatingUnits : OperatingUnit[];
  public loginUser: User;
  public isOwner : boolean = false;
  public isLoading:boolean = false;




  // filteredOptions: Observable<Organization[]>;



  constructor(
    private formBuilder: FormBuilder,
    private datePipe: DatePipe,
    private sharedService: SharedService,
    private headerService: HeaderService,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService,
    private baseService : BaseService,
    private localStorageService : LocalstorageService

  ) { }

  ngOnInit(): void {
    this.initForm();
    this.getRole();
    if(this.localStorageService.checkRoleIsExists('ROLE_OWNER')){
      this.getOrganization();
      this.isOwner=true;
    }



    this.getOuByOrgId(this.localStorageService.getUserOrganizationId());
    this.loginUser = this.localStorageService.getUser();

    this.formGroup.valueChanges.subscribe(() => {
      this.user = Object.assign(this.formGroup.value, {
        organization:  { id: this.localStorageService.checkRoleIsExists('ROLE_OWNER')?this._getOrg().value:this.localStorageService.getUserOrganizationId() },
        operatingUnit: this._getOu().value ? { id: this._getOu().value } : null,
        //roll pass as array ["1","2"] push in array selectedRole
        roles: this._getRoles(),

      });
    });

  }



  initForm() {
    this.formGroup = this.formBuilder.group({
      username: [''],
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone:['', Validators.required],
      gender:['', Validators.required],
      password: ['', Validators.required],
      roles : [''],
      organization: [''],
      operatingUnit : ['', Validators.required],

    });
  }

  getRole() {
    let queryParams = Pagination[1].queryParams;
    this.authService.getRoleList(queryParams).subscribe(
      data => {
       if(data['status'] == true){
         this.roles = data['data'];
       }
      },
      error => {
        console.log(error);
      }
    );
  }

  getOrganization() {
    let queryParams = Pagination[1].queryParams;
    this.baseService.getAllOrg(queryParams).subscribe(
      data => {
       if(data['status'] == true){
         this.organizations = data['data'];
       }
      },
      error => {
        console.log(error);
      }
    );
  }

  _getOrg(){
    return this.formGroup.get('organization');
  }
  _getOu(){
    return this.formGroup.get('operatingUnit');
  }
  _getRoles(){
    //return as hash set formate ["1"]
    let selectedRole = [];
    selectedRole[0] = this.formGroup.get('roles').value;
    return selectedRole;
  }


  getOuByOrgId(orgId:number) {
    console.log(orgId);
    this.baseService.getOuByOrgId(orgId).subscribe(
      data => {
       if(data['status'] == true){
         this.operatingUnits = data['data'];
       }
      },
      error => {
        console.log(error);
      }
    );

  }

  get f() { return this.formGroup.controls; }

  onSubmit(){
    this.formSubmitted = true;
    this.isLoading = true;
    console.log(this.formGroup);
    if (this.formGroup.invalid) {
      this.isLoading=false;
      return;
    }
    this.createUser();
  }

  createUser() {
    this.headerService.isLoadingSubject.next(true);
    this.authService.createUser(this.user).subscribe( data => {
      if(data['status'] == true){
        this.formSubmitted = false;
        this.isLoading=false;
        this.toastr.success(data['message']);
        this.router.navigate(['/auth/user/list']);

      }
      this.headerService.isLoadingSubject.next(false);
    },(error) => {
      this.isLoading=false;
      this.formSubmitted = false;
      this.headerService.isLoadingSubject.next(false);
      console.log(error);
      Swal.fire({
        icon: 'info',
        title: 'Oops...',
        text: error.error.message,

      });
    });

  }

  resetForm(){
    this.formGroup.reset();
  }

}

import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OperatingUnit } from 'src/app/all-modules/base/model/OperatingUnit.model';
import { Organization } from 'src/app/all-modules/base/model/Organization.model';
import { BaseService } from 'src/app/all-modules/base/service/base.service';
import { HeaderService } from 'src/app/header/header.service';
import { LocalstorageService } from 'src/app/security/service/localstorage.service';
import { Pagination } from 'src/app/sharing/constants/pagination.constant';
import { SharedService } from 'src/app/sharing/service/shared.service';
import { environment } from 'src/environments/environment';
import { Role } from '../../../model/role';
import { User } from '../../../model/user';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  public formGroup: FormGroup;
  public baseUrl = environment.baseUrl;
  public formSubmitted = false;
  public isLoading = false;
  public isOwner : boolean = false;
  public user: User;
  public roles : Role[];
  public organizations : Organization[];
  public operatingUnits : OperatingUnit[];
  public loginUser: User;

  constructor(
    private formBuilder: FormBuilder,
    private datePipe: DatePipe,
    private sharedService: SharedService,
    private headerService: HeaderService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
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

    //get user by id from param
    this.getUserById(this.route.snapshot.params.id);

  }

  initForm() {
    this.formGroup = this.formBuilder.group({
      username: [''],
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      gender: ['', Validators.required],
     // password: ['', Validators.required],
      roles: [''],
      organization: [''],
      operatingUnit: ['', Validators.required],
      active : ['']

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


  getUserById(id: number) {
    this.authService.getUserById(id).subscribe((res: any) => {
      if (res['status'] == true) {
        this.user = res['data'];
        this.formGroup.controls['active'].setValue(this.user.active);
        this.formGroup.patchValue(this.user);
        this.formGroup.patchValue({
          roles: this.user.roles[0].authority,
          organization: this.user.organization.id,
          operatingUnit: this.user.operatingUnit.id
        });
      }
    });
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
    if (this.formGroup.invalid) {
      this.isLoading=false;
      return;
    }
    this.updateUser();
  }

  updateUser(){

      this.user = Object.assign(this.formGroup.value, {
        id: this.user.id,
        organization:  { id: this.localStorageService.checkRoleIsExists('ROLE_OWNER')?this._getOrg().value:this.localStorageService.getUserOrganizationId() },
        operatingUnit: this._getOu().value ? { id: this._getOu().value } : null,
        //roll pass as array ["1","2"] push in array selectedRole
        roles: this._getRoles(),
    });

    console.log(this.user);


    this.authService.updateUser(this.user).subscribe(user=>{
      if(user['status'] == true){
        this.isLoading=false;
        this.toastr.success('User updated successfully', 'Success');
        this.router.navigate(['/auth/user/list']);
      }
    },error=>{
      this.isLoading=false;
      this.toastr.error('User update failed', 'Error');
    });

  }

  resetForm(){

  }

}

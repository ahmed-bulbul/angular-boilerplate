
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/header/header.service';
import { SharedService } from 'src/app/sharing/service/shared.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { Role } from '../../../model/role';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'app-role-create',
  templateUrl: './role-create.component.html',
  styleUrls: ['./role-create.component.css']
})
export class RoleCreateComponent implements OnInit {

  public formGroup: FormGroup;
  public role: Role = new Role();
  public baseUrl = environment.baseUrl;
  public parentMenu: any = [];
  public isLoading: boolean;
  public formSubmitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private datePipe: DatePipe,
    private sharedService: SharedService,
    private headerService: HeaderService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formGroup = this.formBuilder.group({
      id: [''],
      authority: ['', Validators.required],
      description: ['',Validators.required],
      active : ['',Validators.required],
    });
  }

  get f() { return this.formGroup.controls; }

  onSubmit() {
    this.formSubmitted = true;
    if (this.formGroup.invalid) {
      return;
    }
    this.createRole();
  }

  createRole() {
    this.headerService.isLoadingSubject.next(true);
    this.role = this.formGroup.value;
    this.authService.createRole(this.role).subscribe(
      data => {
        if(data['status']==true){
          this.headerService.isLoadingSubject.next(false);
          Swal.fire({
            title: "Success",
            text: data['message'],
            icon: "success",

          });
          this.router.navigate(['/auth/role/list']);
        }

      },
      error => {
        console.log(error);
        this.headerService.isLoadingSubject.next(false);
      }
    );
  }

  resetForm(){

  }

}

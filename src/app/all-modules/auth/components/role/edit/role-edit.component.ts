import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderService } from 'src/app/header/header.service';
import { SharedService } from 'src/app/sharing/service/shared.service';
import { environment } from 'src/environments/environment';
import { Role } from '../../../model/role';
import { AuthService } from '../../../service/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-role-edit',
  templateUrl: './role-edit.component.html',
  styleUrls: ['./role-edit.component.css']
})
export class RoleEditComponent implements OnInit {

  public formGroup: FormGroup;
  public role: Role = new Role();
  public baseUrl = environment.baseUrl;
  public formSubmitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private datePipe: DatePipe,
    private sharedService: SharedService,
    private headerService: HeaderService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.initForm();
    //get role by id from param
    this.getRoleById(this.route.snapshot.params.id);

  }

  initForm() {
    this.formGroup = this.formBuilder.group({
      id: [''],
      authority: ['', Validators.required],
      description: ['',Validators.required],
      active : ['',Validators.required],
    });
  }

  getRoleById(id: number) {
    this.authService.getRoleById(id).subscribe((res: any) => {
      if(res['status'] == true){
        this.role = res['data'];
        //set active value
        this.formGroup.controls['active'].setValue(this.role.active);
        this.formGroup.patchValue(this.role);
      }
    });
  }

  onSubmit() {
    this.formSubmitted = true;
    if (this.formGroup.invalid) {
      return;
    }
    this.updateRole();
  }

  updateRole() {
    this.headerService.isLoadingSubject.next(true);
    this.role = this.formGroup.value;
    this.authService.updateRole(this.role).subscribe(
      (res: any) => {
        if (res['status'] == true) {
          this.headerService.isLoadingSubject.next(false);
          this.formSubmitted = false;
          this.router.navigate(['/auth/role/list']);
          this.toastr.success(res['message']);

        } else {
          this.headerService.isLoadingSubject.next(false);
          this.formSubmitted = false;
        }
      },
      (error) => {
        this.headerService.isLoadingSubject.next(false);
        this.formSubmitted = false;
        this.toastr.error(error.error.message);
      }
    );
  }

  get f() { return this.formGroup.controls; }

}

import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OperatingUnit } from 'src/app/all-modules/base/model/OperatingUnit.model';
import { Organization } from 'src/app/all-modules/base/model/Organization.model';
import { HeaderService } from 'src/app/header/header.service';
import { SharedService } from 'src/app/sharing/service/shared.service';
import { environment } from 'src/environments/environment';
import { Role } from '../../../model/role';
import { User } from '../../../model/user';
import { AuthService } from '../../../service/auth.service';

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

  constructor(
    private formBuilder: FormBuilder,
    private datePipe: DatePipe,
    private sharedService: SharedService,
    private headerService: HeaderService,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formGroup = this.formBuilder.group({
      username: [''],
      name: [''],
      email: [''],
      phone: [''],
      gender:[''],
      password: [''],
      role : Role,
      organization: Organization,
      operatingUnit : OperatingUnit

    });
  }

}

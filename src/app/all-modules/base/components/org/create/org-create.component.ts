
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HeaderService } from 'src/app/header/header.service';
import { SharedService } from 'src/app/sharing/service/shared.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { Organization } from '../../../model/Organization.model';
import { BaseService } from '../../../service/base.service';

@Component({
  selector: 'app-org-create',
  templateUrl: './org-create.component.html',
  styleUrls: ['./org-create.component.css']
})
export class OrgCreateComponent implements OnInit {
  public formGroup: FormGroup;
  public org: Organization = new Organization();
  public orgList: Organization[];
  public baseUrl = environment.baseUrl;
  public formSubmitted = false;
  public isLoading: boolean = false;

  public selectedLogoTextFile: any = null;
  public selectedLogoImageFile: any = null;

  constructor(
    private formBuilder: FormBuilder,
    private datePipe: DatePipe,
    private sharedService: SharedService,
    private headerService: HeaderService,
    private baseService: BaseService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {

    this.initForm();
    this.getParentOrg();

    this.formGroup.valueChanges.subscribe(() => {
      this.org = Object.assign(this.formGroup.value, {
        organizationType: this._getOrgType().value ? { id: this._getOrgType().value } : null,
        parent: this._getParent().value ? { id: this._getParent().value } : null,
      });
    });
  }

  initForm() {
    this.formGroup = this.formBuilder.group({
      id: [''],
      code: ['', Validators.required],
      description: [''],
      shortDescription: [''],
      logoText: [''],
      logoImage : [''],
      organizationType: [''],
      parent: [''],
      rootOrganization: ['', Validators.required],
      address: [''],
      telephone: [''],
      email: [''],
      tinNumber: [''],
      fax: [''],
      active: ['', Validators.required],

    });
  }

  get f() { return this.formGroup.controls; }

  onSubmit() {
    this.formSubmitted = true;
    this.isLoading = true;
    if (this.formGroup.invalid) {
      this.isLoading = false;
      return;
    }
    this.createOrganization();
  }

  createOrganization() {
    this.org = this.formGroup.value;
    //logo text as multiprt
    const logoFile = new FormData();
    logoFile.append('logoText', this.selectedLogoTextFile);
    //logo image as multiprt
    logoFile.append('logoImage', this.selectedLogoImageFile);
    console.log(this.org);
    this.baseService.createOrg(this.org).subscribe(
      (data) => {
        if (data['status'] == true) {
          this.toastr.success('Organization created successfully');
          //upload logo and id
          this.baseService.uploadLogo(logoFile, data['data']['id']).subscribe(data =>{
            console.log(data);
          }, error =>{
            console.log(error);
          });
          this.resetForm();
          this.router.navigate(['/base/org/list']);
        }
      },
      (error) => {
        console.log(error);
        Swal.fire('Error', 'Something went wrong', 'error');
      }
    );

  }



  getParentOrg() {
    this.baseService.getParentOrg().subscribe(
      (data) => {
        if (data['status'] == true) {
          this.orgList = data['data'];
        }
      },
      (error) => {
        console.log(error);
        Swal.fire('Error', 'Something went wrong', 'error');
      }
    );
  }

  _getOrgType(){
    return this.formGroup.get('organizationType');
  }

  _getParent(){
    return this.formGroup.get('parent');
  }

  onLogoTextFileSelected(event: any): void {
    this.selectedLogoTextFile = event.target.files[0] ?? null;
    console.log(this.selectedLogoTextFile);
  }

  onLogoImageFileSelected(event: any): void {
    this.selectedLogoImageFile = event.target.files[0] ?? null;
    console.log(this.selectedLogoImageFile);
  }

  resetForm() {
    this.formGroup.reset();
    this.formSubmitted = false;
    this.isLoading = false;
  }

}

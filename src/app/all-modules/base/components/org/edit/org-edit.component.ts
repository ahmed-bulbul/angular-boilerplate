import { Organization } from './../../../model/Organization.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { BaseService } from '../../../service/base.service';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HeaderService } from 'src/app/header/header.service';
import { SharedService } from 'src/app/sharing/service/shared.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-org-edit',
  templateUrl: './org-edit.component.html',
  styleUrls: ['./org-edit.component.css']
})
export class OrgEditComponent implements OnInit {


  public formGroup: FormGroup;
  public org: Organization = new Organization();
  public orgList: Organization[];
  public baseUrl = environment.baseUrl;
  public formSubmitted : boolean = false;
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
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.getParentOrg();
    //get by id
    this.getOrgById(this.route.snapshot.params.id);
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

  getOrgById(id: number) {
    this.baseService.getOrgById(id).subscribe((res: any) => {
      //if status is true
      if(res['status'] == true){
        this.org = res['data'];
        this.formGroup.controls['active'].setValue(this.org.active);
        this.formGroup.controls['rootOrganization'].setValue(this.org.rootOrganization);
        this.formGroup.patchValue(this.org);
        this.formGroup.patchValue({
          organization: this.org.organizationType?.id,
          parent: this.org.parent?.id
        });
      }
    });
  }


  onSubmit(){
    this.formSubmitted = true;
    this.isLoading = true;
    if (this.formGroup.invalid) {
      this.isLoading=false;
      return;
    }
    this.updateOrg();
  }

  updateOrg(){
    //logo text as multiprt
    const logoFile = new FormData();
    logoFile.append('logoText', this.selectedLogoTextFile);
    //logo image as multiprt
    logoFile.append('logoImage', this.selectedLogoImageFile);
    this.org = Object.assign(this.formGroup.value, {
      id: this.org.id,
      organizationType: this._getOrgType().value ? { id: this._getOrgType().value } : null,
      parent: this._getParent().value ? { id: this._getParent().value } : null,

    });
    this.baseService.updateOrg(this.org).subscribe((data: any) => {
      this.isLoading = false;
      if(data['status'] == true){
        //upload logo and id
        //check logoText and logoImage is null or not
        if(this.selectedLogoTextFile != null || this.selectedLogoImageFile != null){
          this.baseService.uploadLogo(logoFile, data['data']['id']).subscribe(data =>{
            console.log(data);
          }, error =>{
            console.log(error);
          });
        }

        this.toastr.success(data['message']);
        this.router.navigate(['/base/org/list']);
      }else{
        this.toastr.error(data['message']);
      }
    });
  }


  _getOrgType(){
    return this.formGroup.get('organizationType');
  }
  _getParent(){
    return this.formGroup.get('parent');
  }

  get f() { return this.formGroup.controls; }

  onLogoTextFileSelected(event: any): void {
    this.selectedLogoTextFile = event.target.files[0] ?? null;
    console.log(this.selectedLogoTextFile);
  }

  onLogoImageFileSelected(event: any): void {
    this.selectedLogoImageFile = event.target.files[0] ?? null;
    console.log(this.selectedLogoImageFile);
  }

}

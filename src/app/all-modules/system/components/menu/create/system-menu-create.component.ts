
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/sharing/service/common.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { SystemMenu } from '../../../model/SystemMenu.model';
import { SystemService } from '../../../service/system.service';

@Component({
  selector: 'app-system-menu-create',
  templateUrl: './system-menu-create.component.html',
  styleUrls: ['./system-menu-create.component.css']
})
export class SystemMenuCreateComponent implements OnInit {

  public formGroup:FormGroup;
  public systemMenu: SystemMenu = new SystemMenu();
  public baseUrl = environment.baseUrl;
  public parentMenu: any = [];


  constructor(private formBuilder: FormBuilder,private datePipe: DatePipe,
    private commonService:CommonService,private systemService:SystemService,private router: Router) { }

  ngOnInit(): void {

    //initialize the form
    this.initForm();
    this.getParentMenu();

    // set systemMenu value from form
    this.formGroup.valueChanges.subscribe(() => {
      this.systemMenu =  Object.assign(this.formGroup.value,{
        parentMenu: this._getParentMenuFormData().value ? {id: this._getParentMenuFormData().value} : null,
      });
    });

  }

  initForm(){

    this.formGroup = this.formBuilder.group({
      id: [''],
      code: ['', [Validators.required,Validators.minLength(3)]],
      description: ['', [Validators.required]],
      parentMenu: [''],
      openUrl:['',[Validators.required]],
      apiUrl:['',[Validators.required]],
      iconHtml:[''],
      hasChild:[''],
      visibleToAll:[''],
      leftSideMenu:[''],
      isChild:[''],
      isActive:['',[Validators.required]],
      sequence:['',[Validators.required]],
    });

  }




  get f() { return this.formGroup.controls; }

  onSubmit(){
    console.log(this.formGroup.value);
    this.saveSystemMenu();
  }

  saveSystemMenu(){
    this.systemService.createSystemMenu(this.systemMenu).subscribe( data =>{

      if(data['status'] === true){
        Swal.fire({
          title: 'Success',
          text: data['message'],
          icon: 'success',
        })
      }else{
        Swal.fire({
          title: 'Info',
          text: data['message'],
          icon: 'info',
        });

      }
    },
    error => {
      //if error code is 403 its forbidden
      if(error.status === 403){
        Swal.fire({
          title: 'Forbidden',
          text: 'You are not authorized to access this feature!',
          icon: 'error',
        })
      }else{
        Swal.fire({
          title: 'Error',
          text: error.message,
          icon: 'error',
        })
      }

    });

  }




  getParentMenu(){
    const apiURL = this.baseUrl + '/api/v1/systemMenu/getParentMenu';
    const queryParams: any = {};
    this.commonService.sendGetRequest(apiURL,queryParams).subscribe((response: any) => {
      if(response.status === true){
        this.parentMenu = response.data;
        console.log(this.parentMenu);
      }else{
        // Swal.fire({
        //   title: 'Info',
        //   text: response.message,
        //   icon: 'info',
        // })
        console.log(response.message);
      }
    },error => {
      Swal.fire({
        title: 'Error',
        text: error.message,
        icon: 'error',
      })
    });
  }

  resetForm(){
    this.formGroup.reset();
  }

  _getParentMenuFormData(){
    console.log(this.formGroup.get('parentMenu').value);
    return this.formGroup.get('parentMenu');
  }

}

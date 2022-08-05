import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsDatepickerNavigationViewComponent } from 'ngx-bootstrap/datepicker/themes/bs/bs-datepicker-navigation-view.component';
import { BaseModule } from 'src/app/all-modules/base/model/BaseModule.model';
import { SharedService } from 'src/app/sharing/service/shared.service';
import { environment } from 'src/environments/environment';
import { RequestAuthCreateDTO } from '../../../dto/RequestAuthCreateDTO.model';
import { RequestAuth } from '../../../model/RequestAuth.model';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'app-request-auth-create',
  templateUrl: './request-auth-create.component.html',
  styleUrls: ['./request-auth-create.component.css']
})
export class RequestAuthCreateComponent implements OnInit {

  public baseModule :BaseModule[];
  public requestAuth : RequestAuth[]=[];
  public produceFormCheckBoxData = new Array();
  public requestAuthCreateDTO : RequestAuthCreateDTO;


  public baseUrl = environment.baseUrl;
  public formGroup:FormGroup;

  constructor(private formBuilder: FormBuilder,private datePipe: DatePipe,
    private sharedService:SharedService,private authService:AuthService,private router: Router) { }

  ngOnInit(): void {
    this.initForm();
    this.getBaseModule();

    //produceFormCheckBoxData set to requestAuthCreateDTO
    this.requestAuthCreateDTO = {
      requestAuthList: this.produceFormCheckBoxData
    }
  }

  onSubmit(){

    console.log(this.requestAuthCreateDTO);

  }


  initForm(){
    this.formGroup = this.formBuilder.group({
      id: [''],
      authority: ['', [Validators.required]],
      chkAuthorizationChar: [''],
      module: [''],
      isActive:[''],
    });

  }

  //get checkbox data of baseModule
  _getBaseModuleFormData() {

  }


  getBaseModule(){
    const url = this.baseUrl+ '/api/v1/shared/baseModule/getModule';
    const queryParams: any = {};
    this.sharedService.sendGetRequest(url,queryParams).subscribe((data: any) => {
      this.baseModule = data.data;

    });
  }

  checkRow(module,chkAuthorizationChar,index,event){
    if(event.target.checked){

      this.produceFormCheckBoxData[index] = {

        // if checkbox is checked then push data to array
         module: module,
         //concat checkbox value with previous value
         chkAuthorizationChar: this.produceFormCheckBoxData[index] ? this.produceFormCheckBoxData[index].chkAuthorizationChar + chkAuthorizationChar : chkAuthorizationChar,
         authority:this.getAuhority


     }
    }else{

      this.produceFormCheckBoxData[index] = {
        module: module,
        // remove data from array by index wise
        chkAuthorizationChar: this.produceFormCheckBoxData[index] ? this.produceFormCheckBoxData[index].chkAuthorizationChar.replace(chkAuthorizationChar,"-") : "",
        authority:this.getAuhority
      }

    }



  }

  //get auth data from formGroup
  get getAuhority(){
    return this.formGroup.value.authority;
  }

}

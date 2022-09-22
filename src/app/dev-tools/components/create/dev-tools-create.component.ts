import { FormBuilder, FormGroup } from '@angular/forms';
import { DevToolsModel } from '../../model/Devtools.model';
import { Component, OnInit } from '@angular/core';
import { DevToolsService } from '../../service/dev-tools.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LocalstorageService } from 'src/app/security/service/localstorage.service';



@Component({
  selector: 'app-dev-tools-create',
  templateUrl: './dev-tools-create.component.html',
  styleUrls: ['./dev-tools-create.component.css']
})
export class DevToolsCreateComponent implements OnInit {

 // public devTools: DevToolsModel[]; // for the list of dev tools

 public devTools: DevToolsModel = new DevToolsModel(); // for the form
 public attributeForm:FormGroup;
 public currentDate = new Date();
 public isOwner: boolean = false;

  constructor(
    private devToolService:DevToolsService,
    private router: Router,
    private toastr:ToastrService,
    private formBuilder: FormBuilder,
    private localStorageService : LocalstorageService
    ){

      setInterval(() => {
        this.currentDate = new Date()
      }, 1000)

    }

  ngOnInit(): void {
    this.initAttributes();
    if(this.localStorageService.checkRoleIsExists('ROLE_OWNER')){
      this.isOwner=true;
    }
  }

  initAttributes(){
    this.attributeForm = this.formBuilder.group({
      name: [""],
      type: [""],
    });
  }

  onSubmitAttributes(){
    console.log(this.attributeForm.value);
    this.devTools.attributes = this.devTools.attributes || [];
    this.devTools.attributes.push(this.attributeForm.value);
    this.initAttributes();
  }

  saveDevTools(){
    this.devToolService.createDevTools(this.devTools).subscribe( data =>{

      if(data['status'] === true){
        this.toastr.success(data['message'], 'Success',{positionClass: 'toast-top-right',timeOut:5000});
        //reset the form
        this.resetForm();
        this.router.navigate(['/dev-tools/create']);
      }else{
        this.toastr.error(data['message']);
      }
    },
    error => console.log(error));
  }

  onSubmit(){
    console.log(this.devTools);
    this.saveDevTools();
  }

  copyToClipboard(text: string, field:string) {
    navigator.clipboard.writeText(text);
    this.toastr.success(`${field} copied to clipboard`, 'Copied',{positionClass: 'toast-top-right',timeOut:5000});
    //click css event color change cursor hand
    if(field === 'rootDirectory'){
     $('.copy-to-clipboard-dir').css('color', '#00bcd4');
     $('.copy-to-clipboard-pac').css('color', '#000');
    }else if(field === 'rootPackage'){
      $('.copy-to-clipboard-pac').css('color', '#00bcd4');
      $('.copy-to-clipboard-dir').css('color', '#000');
    }

  }

  // reset the form
  resetForm(){
    this.devTools = new DevToolsModel();
    //attributes reset
    this.devTools.attributes = [];

  }

}

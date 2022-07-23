import { FormBuilder, FormGroup } from '@angular/forms';
import { DevToolsModel } from './../../model/devtools.model';
import { Component, OnInit } from '@angular/core';
import { DevToolsService } from '../../service/dev-tools.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-dev-tools-create',
  templateUrl: './dev-tools-create.component.html',
  styleUrls: ['./dev-tools-create.component.css']
})
export class DevToolsCreateComponent implements OnInit {

 // public devTools: DevToolsModel[]; // for the list of dev tools


 public devTools: DevToolsModel = new DevToolsModel(); // for the form
 public attributeForm:FormGroup;


  constructor(
    private devToolService:DevToolsService,
    private router: Router,
    private toastr:ToastrService,
    private formBuilder: FormBuilder) {

    }

  ngOnInit(): void {

    this.initAttributes();

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

  //prepair the attribute model


  saveDevTools(){
    this.devToolService.createDevTools(this.devTools).subscribe( data =>{
      // if status is true then show the message
      if(data['status'] === true){
        this.toastr.success(data['message']);
        this.router.navigate(['/dev-tools/create']);
      }
    },
    error => console.log(error));
  }

  onSubmit(){
    console.log(this.devTools);
    this.saveDevTools();
  }

}

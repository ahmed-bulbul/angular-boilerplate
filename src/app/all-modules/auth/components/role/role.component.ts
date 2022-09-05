import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Role } from '../../model/role';


@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  public isLoading:boolean;
  public formSubmitted = false;
  public formGroup: FormGroup;
  public role: Role = new Role();
  public baseUrl = environment.baseUrl;

  //edit mode is true or false
  public editMode: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.formGroup.invalid){
      return;
    }
    if(this.editMode){
      //update
    }else{
      //create
    }
  }

}

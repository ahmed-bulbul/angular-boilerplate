import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  public formGroup:FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.initForm();
  }

  initForm(){

      this.formGroup = this.formBuilder.group({
        oldPassword: ['', [Validators.required,Validators.minLength(3)]],
        newPassword: ['', [Validators.required,Validators.minLength(3)]],
        confirmPassword: ['', [Validators.required,Validators.minLength(3)]]
      });
  }

  onSubmit(){
    console.log('change password form submitted.................');
  }

}

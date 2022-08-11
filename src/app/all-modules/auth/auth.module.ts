import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { RequestAuthCreateComponent } from './components/requestauth/create/request-auth-create.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { NgxSpinnerModule } from 'ngx-spinner';
import { RequestAuthEditComponent } from './components/requestauth/edit/request-auth-edit.component';
import { UserProfileComponent } from './components/user/profile/user-profile.component';
import { ChangePasswordComponent } from './components/user/passwordchange/change-password.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressBarModule } from '@angular/material/progress-bar';


@NgModule({
  declarations: [AuthComponent, RequestAuthCreateComponent, RequestAuthEditComponent, UserProfileComponent, ChangePasswordComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,

    HttpClientModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    MatProgressBarModule,
    BsDatepickerModule.forRoot(),
  ]
})
export class AuthModule { }

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


@NgModule({
  declarations: [AuthComponent, RequestAuthCreateComponent, RequestAuthEditComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,

    HttpClientModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
  ]
})
export class AuthModule { }

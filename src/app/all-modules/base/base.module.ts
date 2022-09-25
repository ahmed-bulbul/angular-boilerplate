import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseRoutingModule } from './base-routing.module';
import { BaseComponent } from './base.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { OrgCreateComponent } from './components/org/create/org-create.component';
import { OrgListComponent } from './components/org/list/org-list.component';



@NgModule({
  declarations: [BaseComponent, OrgCreateComponent, OrgListComponent],
  imports: [
    CommonModule,
    BaseRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class BaseModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseRoutingModule } from './base-routing.module';
import { BaseComponent } from './base.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { OrgCreateComponent } from './components/org/create/org-create.component';
import { OrgListComponent } from './components/org/list/org-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { OrgEditComponent } from './components/org/edit/org-edit.component';
import { OuCreateComponent } from './components/ou/create/ou-create.component';
import { OuListComponent } from './components/ou/list/ou-list.component';



@NgModule({
  declarations: [BaseComponent, OrgCreateComponent, OrgListComponent, OrgEditComponent, OuCreateComponent, OuListComponent],
  imports: [
    CommonModule,
    BaseRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    MatProgressBarModule,
    MatAutocompleteModule,
  ]
})
export class BaseModule { }

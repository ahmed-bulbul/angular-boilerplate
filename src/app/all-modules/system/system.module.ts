import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemRoutingModule } from './system-routing.module';
import { SystemComponent } from './system.component';
import { SystemMenuCreateComponent } from './components/menu/create/system-menu-create.component';
import { SystemMenuListComponent } from './components/menu/list/system-menu-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    SystemComponent,
    SystemMenuCreateComponent,
    SystemMenuListComponent,],
  imports: [
    CommonModule,
    SystemRoutingModule,

    HttpClientModule,
    NgxSpinnerModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
  ]
})
export class SystemModule { }

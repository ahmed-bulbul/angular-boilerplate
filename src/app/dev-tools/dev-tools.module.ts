import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevToolsRoutingModule } from './dev-tools-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { DevToolsComponent } from './dev-tools.component';
import { DevToolsCreateComponent } from './components/create/dev-tools-create.component';


@NgModule({
  declarations: [DevToolsComponent, DevToolsCreateComponent],
  imports: [
    CommonModule,
    DevToolsRoutingModule,


    HttpClientModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),

  ]
})
export class DevToolsModule { }

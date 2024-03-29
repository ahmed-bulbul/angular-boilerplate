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
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {Ng2TelInputModule} from 'ng2-tel-input';
import { EntityAuthComponent } from './components/entity-auth/entity-auth.component';




@NgModule({
  declarations: [
    SystemComponent,
    SystemMenuCreateComponent,
    SystemMenuListComponent,
    EntityAuthComponent,
 ],
  imports: [
    CommonModule,
    SystemRoutingModule,

    HttpClientModule,
    NgxSpinnerModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    MatProgressBarModule,
    Ng2TelInputModule,
    BsDatepickerModule.forRoot(),
  ]
})
export class SystemModule { }

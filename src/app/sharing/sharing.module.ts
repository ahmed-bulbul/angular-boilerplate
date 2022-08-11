import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomDatePipe } from 'src/assets/pipes/custom-date.pipe';
import { HttpClientModule } from '@angular/common/http';
import { SharingComponent } from './sharing.component';
import { WelcomeDialogComponent } from './components/dialog/welcome/welcome-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';





@NgModule({
  declarations: [CustomDatePipe, SharingComponent, WelcomeDialogComponent],
  exports: [
    CustomDatePipe,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatDialogModule


  ]
})
export class SharingModule { }

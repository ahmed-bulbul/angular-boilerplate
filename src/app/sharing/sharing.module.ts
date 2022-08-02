import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomDatePipe } from 'src/assets/pipes/custom-date.pipe';
import { HttpClientModule } from '@angular/common/http';
import { SharingComponent } from './sharing.component';



@NgModule({
  declarations: [CustomDatePipe, SharingComponent],
  exports: [
    CustomDatePipe,
  ],
  imports: [
    CommonModule,
    HttpClientModule,

  ]
})
export class SharingModule { }

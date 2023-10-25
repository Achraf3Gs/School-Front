import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentdetailsRoutingModule } from './studentdetails-routing.module';
import { StudentdetailsComponent } from './studentdetails.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StudentdetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    StudentdetailsRoutingModule
  ]
})
export class StudentdetailsModule { }

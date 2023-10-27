import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentdetailRoutingModule } from './studentdetail-routing.module';
import { StudentdetailComponent } from './studentdetail.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StudentdetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    StudentdetailRoutingModule
  ]
})
export class StudentdetailModule { }

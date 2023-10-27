import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogoutuserRoutingModule } from './logoutuser-routing.module';
import { LogoutuserComponent } from './logoutuser.component';


@NgModule({
  declarations: [
    LogoutuserComponent
  ],
  imports: [
    CommonModule,
    LogoutuserRoutingModule
  ]
})
export class LogoutuserModule { }

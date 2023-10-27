
import { AddstudentComponent } from './views/admin/addstudent/addstudent.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontLayoutComponent } from './layout/front-layout/front-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { AuthAdminLayoutComponent } from './layout/auth-admin-layout/auth-admin-layout.component';
import { guardadminGuard } from './guards/guardadmin.guard';
import { loginguardGuard } from './guards/loginguard.guard';
import { guarduserGuard } from './guards/guarduser.guard';
import { loginuserguardGuard } from './guards/loginuserguard.guard';




const routes: Routes = [
  {path:'',component:FrontLayoutComponent,
children:[
  {path:'',loadChildren:()=>import('./views/front/home/home.module').then(m=>m.HomeModule)},
  {path:'loginuser',loadChildren:()=>import('./views/front/loginuser/loginuser.module').then(m=>m.LoginuserModule),canActivateChild:[loginuserguardGuard]},
  {path:'register',loadChildren:()=>import('./views/front/register/register.module').then(m=>m.RegisterModule)  ,canActivateChild:[loginuserguardGuard]},
  {path:'student',loadChildren:()=>import('./views/front/student/student.module').then(m=>m.StudentModule),canActivateChild:[guarduserGuard]},
  {path:'studentdetail/:id',loadChildren:()=>import('./views/front/studentdetail/studentdetail.module').then(m=>m.StudentdetailModule),canActivateChild:[guarduserGuard]},

]},
  {path:'admin', component:AdminLayoutComponent,canActivate:[guardadminGuard],
children:[
  {path:'',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
  {path:'dashboard',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
  {path:'allstudents',loadChildren:()=>import('./views/admin/allstudents/allstudents.module').then(m=>m.AllstudentsModule)},
  {path:'studentdetails/:id',loadChildren:()=>import('./views/admin/studentdetails/studentdetails.module').then(m=>m.StudentdetailsModule)},
  {path:'addstudent',loadChildren:()=>import('./views/admin/addstudent/addstudent.module').then(m=>m.AddstudentModule)}
]},
{path:'admin/login', component:AuthAdminLayoutComponent,canActivate:[loginguardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

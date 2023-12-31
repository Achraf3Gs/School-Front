import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthadminService } from 'src/app/views/services/services/authadmin.service';

@Component({
  selector: 'app-auth-admin-layout',
  templateUrl: './auth-admin-layout.component.html',
  styleUrls: ['./auth-admin-layout.component.css']
})
export class AuthAdminLayoutComponent implements OnInit{



dataRecieved:any
url:any
messageAuthError:any
  constructor(private asd:AuthadminService, private route:Router, private actroute:ActivatedRoute){
  if (this.asd.loggedIn()==true){
    this.route.navigate(['/admin'])
  }

  }

  ngOnInit(): void {
  this.url=this.actroute.snapshot.queryParams['returnUrl']|| '/admin'
  console.log(this.url);
  }

  loginadmin(f:any){
    let data= f.value

    this.asd.login(data).subscribe((response)=>{

    this.dataRecieved=response
    this.asd.saveDataProfil(this.dataRecieved.token)

    this.route.navigate([this.url])
    },


      err=>this.messageAuthError="invalid email / password")
  }
}


  export interface typeResponse{
    token:any,
    name:string,
    role:any
  }





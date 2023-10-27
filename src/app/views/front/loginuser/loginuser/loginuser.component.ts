import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthuserService } from 'src/app/services/authuser.service';

@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css']
})
export class LoginuserComponent implements OnInit{

  dataRecieved:any
  url:any
  messageAuthError:any
  constructor(private asd:AuthuserService, private router:Router, private actroute:ActivatedRoute){

  }
  ngOnInit(): void {
    this.url=this.actroute.snapshot.queryParams['returnUrl']|| '/'
    console.log(this.url);
  }
  loginuser(f:any){

  let data= f.value
  console.log(data);
    this.asd.login(data).subscribe((response)=>{

    this.dataRecieved=response
    console.log(this.dataRecieved);
    this.asd.saveDataProfil(this.dataRecieved.token)

    this.router.navigate([this.url])
    },
    err=>this.messageAuthError="Email / Password not Valid :p ")
  }
}



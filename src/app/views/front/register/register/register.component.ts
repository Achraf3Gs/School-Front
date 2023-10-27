import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthuserService } from 'src/app/services/authuser.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  dataRecieved:any
  messageAuthError:any=''
  constructor(private asd:AuthuserService, private router:Router, private actroute:ActivatedRoute){

  }

  ngOnInit(): void {
  }

  registeruser(f:any){
    let data= f.value

    this.asd.register(data).subscribe((response)=>{

    this.router.navigate(['/login'])
    },
      err=>this.messageAuthError="You can not register with an used Email")

      console.log(this.messageAuthError);
  }

}


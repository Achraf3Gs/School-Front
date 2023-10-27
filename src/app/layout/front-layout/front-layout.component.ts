import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthuserService } from 'src/app/services/authuser.service';


@Component({
  selector: 'app-front-layout',
  templateUrl: './front-layout.component.html',
  styleUrls: ['./front-layout.component.css']
})
export class FrontLayoutComponent implements OnInit{

  constructor(public loginService:AuthuserService,private route:Router) {

  }
  ngOnInit(): void {
 console.log(this.loginService.loggedIn());
  }

  logout(){
    localStorage.removeItem('token')
    this.route.navigate(['/loginuser'])
  }



}

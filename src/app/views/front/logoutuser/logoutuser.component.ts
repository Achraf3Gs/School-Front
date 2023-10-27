import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logoutuser',
  templateUrl: './logoutuser.component.html',
  styleUrls: ['./logoutuser.component.css']
})
export class LogoutuserComponent implements OnInit{

  constructor(private route:Router){}
  ngOnInit(): void {

  }
  logout(){
    localStorage.removeItem('token')
    this.route.navigate(['/login'])
  }
}

import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthadminService } from 'src/app/views/services/services/authadmin.service';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {
name:any

  constructor(private asd:AuthadminService, private route:Router){



    this.name=this.asd.getUsername()



  }
  ngOnInit(): void {

  }
  logout(){
    localStorage.removeItem('token')
    this.route.navigate(['/admin/login'])
  }

}

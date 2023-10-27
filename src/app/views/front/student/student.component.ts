import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  dataStudent$: Observable<any> | undefined;
  constructor(private ds:DataService,private route:Router){


  }
  ngOnInit(): void {
    this.dataStudent$ = this.ds.getAllstudents();
  }

  details(id:any){
    this.route.navigate(['studentdetail/'+id]);
  }

}

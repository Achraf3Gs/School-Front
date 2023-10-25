import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {
  invalidLogin1 = false;
  invalidLogin2 = false;
  errorMessage1 = "Firstname  is required";
  errorMessage2 = "Lastname  is required";
  constructor(private ds :DataService, private route:Router){

  }
  ngOnInit(): void {

  }
  add(f:any){
    let data= f.value
console.log(data);
this.ds.addstudent(data).subscribe(data=>{
  this.route.navigate(['admin/allstudents'])

  this.invalidLogin1 = false;
  this.invalidLogin1 = false;
},
error => {
  if (data.firstname===""){this.invalidLogin1 = true;}
  if (data.lastname===""){this.invalidLogin2 = true;}

});
  }

}

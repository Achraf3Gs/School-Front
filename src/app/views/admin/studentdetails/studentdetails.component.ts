import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent implements OnInit{
id=""
dataObject:any
messageError=""
  constructor(private route:ActivatedRoute, private ds:DataService ){

  this.route.params.subscribe(params=>this.id= params['id'])
  this.ds.getOnestudent(this.id).subscribe(response=>this.dataObject=response,
     (err:HttpErrorResponse)=>this.messageError="We don't found this student")

  }
  ngOnInit(): void {

  }
}

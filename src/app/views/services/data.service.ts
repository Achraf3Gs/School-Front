import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {




  token:any=localStorage.getItem('token')


  constructor(private http:HttpClient) {
  }


getAllstudents(){
  return this.http.get(`${environment.urlBackend}`+'students/list')
}


addstudent(profil:any){
  return this.http.post(`${environment.urlBackend}`+'students/add-student', profil)
}

deletestudent(id:any){
  return this.http.delete (`${environment.urlBackend}`+'students/delete/'+ id)

}updatestudent(id:any, profil:any){
  return this.http.patch (`${environment.urlBackend}`+'students/update/'+ id, profil)

}

getOnestudent(id:any){
  return this.http.get (`${environment.urlBackend}`+'students/'+ id)

}
}



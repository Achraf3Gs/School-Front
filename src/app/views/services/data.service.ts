import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  token:any=localStorage.getItem('token')


  constructor(private http:HttpClient) {
  }


getAllstudents(){
  return this.http.get('http://127.0.0.1:8080/students/list')
}

addstudent(profil:any){
  return this.http.post('http://127.0.0.1:8080/students/add-student', profil)
}

deletestudent(id:any){
  return this.http.delete ('http://127.0.0.1:8080/students/delete/'+ id)

}updatestudent(id:any, profil:any){
  return this.http.patch ('http://localhost:8080/students/update/'+ id, profil)

}

getOnestudent(id:any){
  return this.http.get ('http://127.0.0.1:8080/students/'+ id)

}
}



import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";


@Injectable({
  providedIn: 'root'
})
export class AuthadminService {



  profilAdmin={
    name:'',
    role:''
   }


  helper = new JwtHelperService()



  constructor(private http:HttpClient) {

  }



login(data:any){

  return this.http.post('http://localhost:8080/api/v1/auth/authenticate',data)
}

saveDataProfil(token:any){
let decodeToken=this.helper.decodeToken(token)

localStorage.setItem('token',token)
localStorage.setItem('username',decodeToken.username)
localStorage.setItem('role',decodeToken.role)


console.log(decodeToken);
}

getUsername(){
  let token:any=localStorage.getItem('token')
  let decodeToken=this.helper.decodeToken(token)
  return decodeToken.username
}

loggedIn(){
  let token:any=localStorage.getItem('token')
  if(!token){return false}

  let decodeToken=this.helper.decodeToken(token)
  let id =decodeToken.id


  let role=decodeToken.role

  if(this.helper.isTokenExpired(token)){return false}
if(role!='ADMIN'){return false}

if(this.helper.isTokenExpired(token)){return false}
return true
}


}

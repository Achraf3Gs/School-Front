import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';






@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {



  token:any=localStorage.getItem('token')


  secret=environment.secret
  client=environment.client

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {



      req = req.clone({

        setHeaders:{
          'Authorization' : `Bearer ${this.token}`
        },
       setParams:{
        'secret':this.secret,
        'client':this.client
       }
      })

    return next.handle(req);
  }

}

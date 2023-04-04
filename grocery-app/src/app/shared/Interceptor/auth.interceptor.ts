import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { compileNgModule } from '@angular/compiler';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

   let userToken = localStorage.getItem('token')
  //  let token = userToken
   console.log(userToken);

   if(userToken){
     let req = request.clone({
      setHeaders:{
        token  : userToken  
     }
    })
    return next.handle(req)
   }


   return next.handle(request);
  }
}

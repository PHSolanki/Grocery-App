import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { User_Register_Model } from 'src/data-type';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient,private router:Router) { }

  baseUrl = environment.baseUrl
  user_register = environment.user_register
  user_login = environment.user_login


User_Register(data:User_Register_Model){
  try {
    return this.http.post<User_Register_Model>(this.baseUrl+this.user_register,data)
  } catch (error:any) {
    return throwError(() => new Error(error))
  }
}


}
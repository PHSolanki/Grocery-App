import { Injectable } from '@angular/core';
import { throwError } from 'rxjs/internal/observable/throwError';
import {  User_Register_Model } from 'src/data-type';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = environment.baseUrl
  user_register = environment.user_register
  user_login = environment.user_login

  constructor(private http:HttpClient) { }

  userLogin(data:any){
    try {
      return this.http.post<User_Register_Model>(this.baseUrl+this.user_login, data)
    } catch (error:any) {
      return throwError(() => new Error(error))
    }
  }
}

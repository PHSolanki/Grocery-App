import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs/internal/observable/throwError';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class editUserService {

  constructor(private http:HttpClient) { }

  baseUrl = environment.baseUrl
  change_password = environment.change_password
  edit_user = environment.edit_user
  add_address = environment.add_address

  changePassword(data:any){
    try {
      return this.http.put<any>(this.baseUrl+this.change_password, data)
    } catch (error:any) {
      return throwError(() => new Error(error))
    }
  }


  editUser(data:any){
    try {
      return this.http.put<any>(this.baseUrl+this.edit_user, data)
    } catch (error:any) {
      return throwError(() => new Error(error))
    }
  }

  manage_address(data:any){
    try{
      return this.http.post<any>(this.baseUrl+this.add_address,data)
    }catch (error:any){
      return throwError(()=>new Error(error))
    }
  }

}

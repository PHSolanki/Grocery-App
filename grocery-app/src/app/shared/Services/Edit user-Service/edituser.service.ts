import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs/internal/observable/throwError';
import { environment } from 'src/environments/environment.development';
import { ChangePassword } from '../../interface/data-type';
import { Edit_user_detail } from '../../interface/data-type';
import { Add_User_Address } from '../../interface/data-type';

@Injectable({
  providedIn: 'root'
})
export class editUserService {

  constructor(private http:HttpClient) { }

  baseUrl = environment.baseUrl
  change_password = environment.change_password
  edit_user = environment.edit_user
  add_address = environment.add_address
  customers_details = environment.customers_details
  update_customer_address = environment.update_customer_address
  delete_customer_address = environment.delete_customer_address

  changePassword(data:any){
    try {
      return this.http.put<any>(this.baseUrl+this.change_password, data)
    } catch (error:any) {
      return throwError(() => new Error(error))
    }
  }

  editUser(data:any){
    try {
      return this.http.put<any>(this.baseUrl+this.edit_user, data , {headers: new HttpHeaders({'ngrok-skip-browser-warning': 'skip-browser-warning', 'Access-Control-Allow-Origin': '*'})})
    } catch (error:any) {
      return throwError(() => new Error(error))
    }
  }

  add_addressFunc(data:any){
    try{
      return this.http.post<any>(this.baseUrl+this.add_address,data , {headers: new HttpHeaders({'ngrok-skip-browser-warning': 'skip-browser-warning', 'Access-Control-Allow-Origin': '*'})})
    }catch (error:any){
      return throwError(()=>new Error(error))
    }
  }

  getUserDetails(){
    try{
      return this.http.get<any>(this.baseUrl+this.customers_details,{headers: new HttpHeaders({'ngrok-skip-browser-warning': 'skip-browser-warning', 'Access-Control-Allow-Origin': '*'})})
    }catch (error:any){
      return throwError(()=>new Error(error))
    }
  }

  updateCustomerAddress(data:any,id:any){
    try{
      return this.http.put<any>(this.baseUrl+this.update_customer_address,data,{headers: new HttpHeaders({'ngrok-skip-browser-warning': 'skip-browser-warning', 'Access-Control-Allow-Origin': '*','address_id':id})})
    }catch(error:any){
      return throwError(()=>new Error(error))
    }
  }

  deleteCustomerAddress(id:any){
    try{
      return this.http.delete(this.baseUrl+this.delete_customer_address ,{headers: new HttpHeaders({'ngrok-skip-browser-warning': 'skip-browser-warning', 'Access-Control-Allow-Origin': '*','address_id':id})} )
    }catch(error:any){
      return throwError(()=>new Error(error))
    }
  }
  
}

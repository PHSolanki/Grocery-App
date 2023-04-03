import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs/internal/observable/throwError';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ChangepasswordService {

  constructor(private http:HttpClient) { }

  baseUrl = environment.baseUrl
  change_password = environment.change_password

  changePassword(data:any){
    try {
      return this.http.put<any>(this.baseUrl+this.change_password, data)
    } catch (error:any) {
      return throwError(() => new Error(error))
    }
  }
}

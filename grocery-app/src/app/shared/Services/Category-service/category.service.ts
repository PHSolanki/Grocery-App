import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  baseUrl = environment.baseUrl
  get_all_categories=environment.get_all_categories

  getAllCategory(){
    try{
      return this.http.get<any>(this.baseUrl+this.get_all_categories,{headers: new HttpHeaders({'ngrok-skip-browser-warning': 'skip-browser-warning', 'Access-Control-Allow-Origin': '*'})})
    }catch(error:any){
      return throwError(() => new Error(error))
    }
  }
}

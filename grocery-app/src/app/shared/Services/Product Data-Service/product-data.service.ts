import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(private http:HttpClient) { }


  baseUrl = environment.baseUrl
  get_all_products = environment.get_all_products
  get_product_by_category_id = environment.get_product_by_category_Id
  get_product_by_id = environment.get_product_by_id

  productsArray=[
    {id:1, source:'/assets/featured2.PNG' , quantity:1, name:'Potatos' , category:'Vegetables' ,  price:'14.99' , moneyOfferPrice:'10'},
    {id:2, source:'/assets/topsells1.PNG' , quantity:1, name:'Orange ' , category:'Fruits' , price:'12' ,moneyOfferPrice:'8'},
    {id:3, source:'/assets/featured2.PNG' , quantity:1, name:'Potatos' , category:'Vegetables' , price:'14.99',moneyOfferPrice:'10'},
    {id:4, source:'/assets/topsells1.PNG' , quantity:1, name:'Orange ' , category:'Fruits' , price:'12.99',moneyOfferPrice:'10'},
    {id:5, source:'/assets/featured4.PNG' , quantity:1, name:'Broccoli' , category:'Vegetables' , price:'10.99',moneyOfferPrice:'10'},
    {id:6, source:'/assets/topsells1.PNG' , quantity:1, name:'Orange ' , category:'Fruits' , price:'12',moneyOfferPrice:'10'},
    {id:7, source:'/assets/featured5.PNG' , quantity:1, name:'Beans ' , category:'Vegetables' , price:'19.99',moneyOfferPrice:'10'},
    {id:8, source:'/assets/topsells1.PNG' , quantity:1, name:'Orange ' , category:'Fruits' , price:'12',moneyOfferPrice:'10'},
    {id:9, source:'/assets/featured1.PNG' , quantity:1, name:'Redish ' , category:'Vegetables' , price:'12',moneyOfferPrice:'10'},
    {id:10, source:'/assets/topsells1.PNG' , quantity:1, name:'Orange ' , category:'Fruits' , price:'12.99',moneyOfferPrice:'10'},
    {id:11, source:'/assets/featured3.PNG' , quantity:1, name:'Tomatos ' , category:'Vegetables' , price:'12.99',moneyOfferPrice:'10'},
    {id:12, source:'/assets/topsells1.PNG' , quantity:1, name:'Orange ' , category:'Fruits' , price:'14.99',moneyOfferPrice:'10'},
    {id:13 , source:'assets/topsells1.PNG' , quantity:1, name:'Orange 1kg' , category:'Fruits', price:'2' },
    {id:14 , source:'assets/topsells2.PNG' , quantity:1, name:'Orange 1kg' , category:'Vegetables', price:'4' },
    {id:15 , source:'assets/topsells1.PNG' , quantity:1, name:'Orange 1kg' , category:'Fruits', price:'6' },
    {id:16 , source:'assets/topsells2.PNG' , quantity:1, name:'Orange 1kg' , category:'Vegetables',price:'6' },
    {id:17 , source:'assets/topsells1.PNG' , quantity:1, name:'Orange 1kg' ,category:'Fruits', price:'5' },
    {id:18 , source:'assets/topsells2.PNG' , quantity:1, name:'Orange 1kg' ,category:'Vegetables', price:'3' },
    {id:19 , source:'assets/topsells1.PNG' , quantity:1, name:'Orange 1kg' ,category:'Fruits', price:'10' },
    {id:21 , source:'assets/topsells1.PNG' , quantity:1, name:'Orange 1kg' ,category:'Vegetables', price:'13' }
  ]



  getAllProducts(){
    try{
      return this.http.get<any>(this.baseUrl+this.get_all_products ,{headers: new HttpHeaders({'ngrok-skip-browser-warning': 'skip-browser-warning', 'Access-Control-Allow-Origin': '*'})})
    }catch(error:any){
      return throwError(() => new Error(error))
    }
  }

  productByCategoryId(id : any){
    try{
      return this.http.get<any>(this.baseUrl+this.get_product_by_category_id ,{headers: new HttpHeaders({'ngrok-skip-browser-warning': 'skip-browser-warning', 'Access-Control-Allow-Origin': '*' , 'Category_id':id})})
    }catch(error:any){
      return throwError(() => new Error(error))
    }
  }

  productById(id : any){
    try{
      return this.http.get<any>(this.baseUrl+this.get_product_by_id ,{headers: new HttpHeaders({'ngrok-skip-browser-warning': 'skip-browser-warning', 'Access-Control-Allow-Origin': '*' , 'product_id':id})})
    }catch(error:any){
      return throwError(() => new Error(error))
    }
  }
}

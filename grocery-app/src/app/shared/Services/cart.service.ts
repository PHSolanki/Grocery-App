import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  getCartDetails: any;

  constructor() { }

  subTotal:number=0

  getTotal(){
    if(localStorage.getItem('localCart')){
      this.getCartDetails = JSON.parse(localStorage.getItem('localCart')!)
      this.subTotal = this.getCartDetails.reduce(function(acc: any , val: any){
        return acc +(val.price * val.quantity);
      },0)
    }
  }
}

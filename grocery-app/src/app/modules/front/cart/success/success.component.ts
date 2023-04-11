import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/shared/Services/cart-service/cart.service';
import { EncryptionService } from 'src/app/shared/Services/encryption/encryption.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent {

  constructor(private _cartservice:CartService , private _encryption:EncryptionService , private route:Router){}

  ngOnInit(){
    this.scroll()
    // this.getOrderById()
  }
  scroll(){
    window.scrollBy(0,0)
  }

  order_id:any
  temp_order_id:number
  Encrypted_order_id:any
  orderDetails:any=[]
  button_clicked:boolean=true

  getOrderById(){

    this.order_id = localStorage.getItem('order id')

    this._encryption.Encryption(this.order_id).subscribe((Encryption_res)=>{
      console.log("Encrypted order id response",Encryption_res);

      this.Encrypted_order_id = Encryption_res.data

      console.log(this.Encrypted_order_id);
      

      this._cartservice.getOrderById(this.Encrypted_order_id).subscribe((order_by_id_res)=>{
        console.log("order by id response",order_by_id_res);

        this.orderDetails.push(order_by_id_res.data)
        console.log("Order Details array",this.orderDetails);
        
        this.button_clicked=false
      })
      
    })
  }

  RemoveOrderId(){
    localStorage.removeItem('order id')
    this.route.navigate(['/home'])
  }

}

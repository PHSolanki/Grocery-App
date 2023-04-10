import { Component } from '@angular/core';
import { CartService } from 'src/app/shared/Services/cart-service/cart.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {

  constructor(private _cartservice : CartService){}

 
  ngOnInit(){
    this.scroll()
    this.getAllOrders()
  }
  scroll(){
    window.scrollBy(0,0)
  }

  
  All_orders_Arr:any = [ ]
  Items_Count:any

  getAllOrders(){
    this._cartservice.getAllOrders().subscribe((get_all_orders_res)=>{
      console.log("Get all orders",get_all_orders_res);
      if(get_all_orders_res){
        if(get_all_orders_res.data){
          if(get_all_orders_res.data.orders){
            this.All_orders_Arr=get_all_orders_res.data.orders
            console.log(this.All_orders_Arr);
             this.Items_Count= this.All_orders_Arr.length
             console.log(this.Items_Count);
             
            
          }
        }
      }
    })
  }
  
}

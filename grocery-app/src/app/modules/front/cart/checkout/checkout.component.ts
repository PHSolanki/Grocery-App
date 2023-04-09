import { compileNgModule } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/shared/Services/cart-service/cart.service';
import { editUserService } from 'src/app/shared/Services/Edit user-Service/edituser.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  //#region 
  grandTotal:any = 0
  constructor(private route :Router , public cartservice:CartService , private edituser:editUserService){  }

  User_addresses:any=[]
 
  ngOnInit(){
   this.scroll()
   this.getUserDetails()           
  }

  scroll(){
    window.scrollBy(0,0)
  }

  getUserDetails(){
    this.edituser.getUserDetails().subscribe((res)=>{
      console.log(res);

      this.User_addresses=res.data.addresses

      console.log(this.User_addresses);
      
      
    })
  }

  Cancel_Checkout(){
  this.route.navigate(['/home'])
  }

  Place_Order(){
    this.route.navigate(['front/cart/success'])
  }
}

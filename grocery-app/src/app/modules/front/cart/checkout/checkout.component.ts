import { compileNgModule } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/shared/Services/cart-service/cart.service';
import { editUserService } from 'src/app/shared/Services/Edit user-Service/edituser.service';
import { EncryptionService } from 'src/app/shared/Services/encryption/encryption.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  //#region 
  grandTotal:any = 0
  constructor(private route :Router , public cartservice:CartService , private edituser:editUserService , private _encryptionservice:EncryptionService){  }

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

  delivery_address_id:any
  billing_address_id:any

  selectAddress(addressSelect:any){

    console.log("selected address id" , addressSelect);

    this._encryptionservice.Encryption(addressSelect).subscribe((encrypted_address_id_res)=>{
      console.log("encrypted address id",encrypted_address_id_res.data);

      this.delivery_address_id = encrypted_address_id_res.data
      this.billing_address_id = encrypted_address_id_res.data 
    })
    
    
  }

  payment_status:any="W4YV_pkH7OAkvZO4P1gbzA=="
  order_status:any="Nn9l9xhHYQsvNB503C4EAQ==";
  token:any
  cartData:any
  
  Place_Order(){

    if(this.billing_address_id){

      this.token=localStorage.getItem('token')
      this.cartData=localStorage.getItem('localCart')

      if(this.token){
        this.cartservice.Add_Order(this.cartData,this.delivery_address_id,this.billing_address_id,this.payment_status,this.order_status).subscribe((Add_order_res)=>{
          console.log(Add_order_res);
          console.log("");
          
          
        })
      }
      
    }


    // this.route.navigate(['front/cart/success'])
  }





  Cancel_Checkout(){
  this.route.navigate(['/home'])
  }
}

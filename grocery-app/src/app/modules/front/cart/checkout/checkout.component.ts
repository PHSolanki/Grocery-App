import { compileNgModule } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/shared/Services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  //#region 
  grandTotal:any = 0
  constructor(private route :Router , public cartservice:CartService){  }

  address_user=[
    {id:1, address:"Odell J. Gabbert 1045 Kildeer DriveNorfolk, VA 23502"},
    {id:2, address:"Thelma E. Rogers 3651 Burton AvenueMemphis, TN 38104"},
    {id:3, address:"Kathleen G. Hogan 3516 Layman AvenueFayetteville, NC 28306"}
  ]
 
  ngOnInit(){
   this.scroll()           
  }

  scroll(){
    window.scrollBy(0,0)
  }

  Cancel_Checkout(){
  this.route.navigate(['/home'])
  }

  Place_Order(){
    this.route.navigate(['front/cart/success'])
  }
}

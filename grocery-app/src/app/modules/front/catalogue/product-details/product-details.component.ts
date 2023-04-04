import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/shared/Services/cart-service/cart.service';
import { ProductDataService } from 'src/app/shared/Services/Product Data-Service/product-data.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{

  constructor(private activatedroute:ActivatedRoute , private toast:ToastrService , private cartservice:CartService ,private productservice:ProductDataService){  }

  value:any;
  itemsCart:any=[];
  product: any;
  productId: any;
  productsArray!:any[]
  

  ngOnInit(): void{

    this.scroll()

    this.productsArray = this.productservice.productsArray

    this.productId = this.activatedroute.snapshot.paramMap.get('id');
    this.product= this.productsArray.find(x => x.id == this.productId) 

  }

  scroll(){
    window.scroll(0,0);
  }

  getValue() {
    console.log(this.value);
  }

  increment(product: any){
    product.quantity=product.quantity+1;
  }

  decrement(product: any){
    if(product.quantity>1){
      product.quantity=product.quantity-1;
    }else{
      product.quantity=1
    }
  }  

  addToCart(category: any){
    this.cartservice.addToCart(category)
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/shared/Services/cart-service/cart.service';
import { EncryptionService } from 'src/app/shared/Services/encryption/encryption.service';
import { ProductDataService } from 'src/app/shared/Services/Product Data-Service/product-data.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{

  constructor(private activatedroute:ActivatedRoute , private _encryptionservice:EncryptionService , private cartservice:CartService ,private productservice:ProductDataService){  }

  value:any;
  itemsCart:any=[];
  product: any;
  productId: any;
  productsArray!:any[]
  Product_Id:any
  counter:any=1

  ngOnInit(): void{

    this.scroll()
    this.getproductId()
    this.getproductById()

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

  getproductId(){
    this.activatedroute.paramMap.subscribe((params)=>{
      this.Product_Id=params.get('name')
      console.log("category id",this.Product_Id)
  })
}


  increment(){
    this.counter=this.counter+1
  }

  decrement(){
    if(this.counter>1){
      this.counter=this.counter-1
    }
  }  

  addToCart(category: any){
    this.cartservice.addToCart(category)
  }

  encrypted_Product_Id:any
  product_Data:any

  getproductById(){

    this._encryptionservice.Encryption(this.Product_Id).subscribe((res)=>{
      console.log(res);

      this.encrypted_Product_Id=res.data

      this.productservice.productById(this.encrypted_Product_Id).subscribe((res)=>{
        console.log(res);

        this.product_Data=res.data

        console.log(this.product_Data);
        
        
      })
      
    })
  }



  // increment(product: any){
  //   product.quantity=product.quantity+1;
  // }

  // decrement(product: any){
  //   if(product.quantity>1){
  //     product.quantity=product.quantity-1;
  //   }else{
  //     product.quantity=1
  //   }
  // }



}

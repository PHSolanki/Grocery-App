import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/shared/Services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  
  product: any;
  productId: any;
  itemsCart:any=[];
  getData:string | null = "All"
  productsArray!:any[]


  constructor(private currentProduct:ActivatedRoute ,private toast:ToastrService ,private cartservice:CartService){}

  ngOnInit(){
    this.getProduct()
    this.scroll()
    this.getProductId()
    this. productsArray=this.cartservice.productData()
  }

  scroll(){
    window.scrollTo(0,0)
  }

  getProductId(){
    this.cartservice.getProductId()
  }
  
  filterData(data:any){
      this.getData=data
      console.log(this.getData);  
  }

  getProduct(){
    this.currentProduct.paramMap.subscribe((x)=>{
      if(x.get('name')==null){
        this.getData = "All"
      }else{
        this.getData= x.get('name')
      }
    })
  }

  addToCart(category: any){    
    this.cartservice.addToCart(category)
  }

  
}

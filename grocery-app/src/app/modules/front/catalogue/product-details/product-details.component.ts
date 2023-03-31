import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/shared/Services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{

  constructor(private activatedroute:ActivatedRoute , private toast:ToastrService , private cartservice:CartService){  }

  value:any;
  itemsCart:any=[];
  product: any;
  productId: any;
  

  productsArray=[
    {id:1, source:'/assets/featured2.PNG' , quantity:1, name:'Potatos' , category:'Vegetables' , rater:'By Mr.food' , price:'14.99' , moneyOfferPrice:'10'},
    {id:2, source:'/assets/topsells1.PNG' , quantity:1, name:'Orange ' , category:'Fruits' , rater:'By Mr.food' , price:'12' ,moneyOfferPrice:'8'},
    {id:3, source:'/assets/featured2.PNG' , quantity:1, name:'Potatos' , category:'Vegetables' , rater:'By Mr.food' , price:'14.99',moneyOfferPrice:'10'},
    {id:4, source:'/assets/topsells1.PNG' , quantity:1, name:'Orange ' , category:'Fruits' , rater:'By Mr.food' , price:'12.99',moneyOfferPrice:'10'},
    {id:5, source:'/assets/featured4.PNG' , quantity:1, name:'Broccoli' , category:'Vegetables' , rater:'By Mr.food' , price:'10.99',moneyOfferPrice:'10'},
    {id:6, source:'/assets/topsells1.PNG' , quantity:1, name:'Orange ' , category:'Fruits' , rater:'By Mr.food' , price:'12',moneyOfferPrice:'10'},
    {id:7, source:'/assets/featured5.PNG' , quantity:1, name:'Beans ' , category:'Vegetables' , rater:'By Mr.food' , price:'19.99',moneyOfferPrice:'10'},
    {id:8, source:'/assets/topsells1.PNG' , quantity:1, name:'Orange ' , category:'Fruits' , rater:'By Mr.food' , price:'12',moneyOfferPrice:'10'},
    {id:9, source:'/assets/featured1.PNG' , quantity:1, name:'Redish ' , category:'Vegetables' , rater:'By Mr.food' , price:'12',moneyOfferPrice:'10'},
    {id:10, source:'/assets/topsells1.PNG' , quantity:1, name:'Orange ' , category:'Fruits' , rater:'By Mr.food' , price:'12.99',moneyOfferPrice:'10'},
    {id:11, source:'/assets/featured3.PNG' , quantity:1, name:'Tomatos ' , category:'Vegetables' , rater:'By Mr.food' , price:'12.99',moneyOfferPrice:'10'},
    {id:12, source:'/assets/topsells1.PNG' , quantity:1, name:'Orange ' , category:'Fruits' , rater:'By Mr.food' , price:'14.99',moneyOfferPrice:'10'},
    {id:13 , source:'assets/topsells1.PNG' ,quantity:1, name:'Orange 1kg' , category:'Fruits', price:'2' },
    {id:14 , source:'assets/topsells2.PNG' ,quantity:1, name:'Orange 1kg' , category:'Vegetables', price:'4' },
    {id:15 , source:'assets/topsells1.PNG' ,quantity:1, name:'Orange 1kg' , category:'Fruits', price:'6' },
    {id:16 , source:'assets/topsells2.PNG' ,quantity:1, name:'Orange 1kg' , category:'Vegetables',price:'6' },
    {id:17 , source:'assets/topsells1.PNG' ,quantity:1, name:'Orange 1kg' ,category:'Fruits', price:'5' },
    {id:18 , source:'assets/topsells2.PNG' ,quantity:1, name:'Orange 1kg' ,category:'Vegetables', price:'3' },
    {id:19 , source:'assets/topsells1.PNG' ,quantity:1, name:'Orange 1kg' ,category:'Fruits', price:'10' },
    {id:21 , source:'assets/topsells1.PNG' , quantity:1, name:'Orange 1kg' ,category:'Vegetables', price:'13' }
  ]

  

  ngOnInit(): void{

    this.scroll()

     this.productId = this.activatedroute.snapshot.paramMap.get('id');
     this.product= this.productsArray.find(x => x.id == this.productId)

     
  }

  scroll(){
    window.scrollTo(0,0);
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

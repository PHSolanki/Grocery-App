import { ReturnStatement } from '@angular/compiler';
import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CartService } from 'src/app/shared/Services/cart-service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  constructor(private router:Router , private cartservice:CartService){}

  ngOnInit(){
    this.cartDetails()
    this.getTotal()
    this.scroll()
  }

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
    {id:12, source:'/assets/topsells1.PNG' , quantity:1, name:'Orange ' , category:'Fruits' , rater:'By Mr.food' , price:'14.99',moneyOfferPrice:'10'}
  ]

  getCartDetails : any =[]
  object_of_data:any
  GST:any
  subTotal:number=0
  Total:number
 

  scroll(){
    window.scrollBy(0,0)
  }

  cartDetails(){
    if(localStorage.getItem('localCart')){
      this.getCartDetails = JSON.parse(localStorage.getItem('localCart')!)
    }
    console.log("this.getCartDetails",this.getCartDetails);
    
  }

  incQty(item:any){
    item.quantity=item.quantity+1
    localStorage.setItem('localCart' , JSON.stringify(this.getCartDetails))
    this.getTotal()
  }
  

  decQty(item:any){
    if(item.quantity!=1){
      item.quantity=item.quantity-1
    }
    localStorage.setItem('localCart' , JSON.stringify(this.getCartDetails)) 
    this.getTotal()
  }

 

  getTotal(){
    if(localStorage.getItem('localCart')){
      this.getCartDetails = JSON.parse(localStorage.getItem('localCart')!)
      this.subTotal = this.getCartDetails.reduce(function(acc: any , val: any){
        return acc +(val.amount * val.quantity);
      },0)     
    }
    this.GST=this.subTotal*(0.18)
    this.Total=this.subTotal+this.GST
    this.cartservice.cartTotal.emit(this.subTotal)
  }


  singleDelete(item: any ){
    console.log(item);
    if(localStorage.getItem('localCart')){
      this.getCartDetails = JSON.parse(localStorage.getItem('localCart')!);
      
      for(let i=0 ; i<this.getCartDetails.length ; i++){
        if(this.getCartDetails[i].id===item){
          this.getCartDetails.splice(i,1);
          console.log(this.getCartDetails);
          localStorage.setItem( 'localCart', JSON.stringify(this.getCartDetails))

        }
        this.cartservice.cartData.emit(this.getCartDetails)
      }
    } 
    this.getTotal()   
  }

  product:any
  
  productArr:any=[]

  get_cart_data(){
    console.log("getCartDetails",this.getCartDetails)
    for(let i=0; i<this.getCartDetails.length ; i++){
      console.log("Cart Length",this.getCartDetails.length);


      this.product={
        "product_id" : this.getCartDetails[i].id,
        "product_name" : this.getCartDetails[i].title,
        "qty" : this.getCartDetails[i].quantity,
        "product_amount" : this.getCartDetails[i].amount,
        "discount_type" : 1,
        "discount_amount" : 10
      }
      
      console.log("Products Array" , this.productArr);
      console.log("Products" ,this.product);
      this.productArr.push(this.product)
      
    }
    console.log("Products Array" , this.productArr);
    return this.productArr
  }




  checkout(){

    this.object_of_data={
      "order_date": "2023-04-06",
      "special_note": "its special",
      "estimate_delivery_date": "2023-04-15",
      "sub_total": this.subTotal,
      "tax_amount": this.GST.toFixed(2),
      "discount_amount": 10,
      "total_amount": this.Total,
      "paid_amount": this.Total,
      "payment_type": 2,
      "order_products":this.get_cart_data(),
    }

    console.log("object of data" , this.object_of_data);
    localStorage.setItem('object_of_data',JSON.stringify(this.object_of_data))
    
    this.router.navigate(['front/cart/checkout'])

  }


  addProducts(){
    this.router.navigate(['front/catalogue/product-list'])
  }




  // cartDetails(){
  //   if(localStorage.getItem('localCart')){
  //     this.getCartDetails = JSON.parse(localStorage.getItem('localCart')!)
  //   }
  // }

  // incQty(item:any){
  //   item.quantity=item.quantity+1
  //   localStorage.setItem('localCart' , JSON.stringify(this.getCartDetails))
  //   this.getTotal()
  // }
  

  // decQty(item:any){
  //   if(item.quantity!=1){
  //     item.quantity=item.quantity-1
  //   }
  //   localStorage.setItem('localCart' , JSON.stringify(this.getCartDetails)) 
  //   this.getTotal()
  // }

  // subTotal:number=0

  // getTotal(){
  //   if(localStorage.getItem('localCart')){
  //     this.getCartDetails = JSON.parse(localStorage.getItem('localCart')!)
  //     this.subTotal = this.getCartDetails.reduce(function(acc: any , val: any){
  //       return acc +(val.price * val.quantity);
  //     },0)     
  //   }
  //   this.cartservice.cartTotal.emit(this.subTotal)
  // }


  // singleDelete(item: any ){
  //   console.log(item);
  //   if(localStorage.getItem('localCart')){
  //     this.getCartDetails = JSON.parse(localStorage.getItem('localCart')!);
      
  //     for(let i=0 ; i<this.getCartDetails.length ; i++){
  //       if(this.getCartDetails[i].id===item){
  //         this.getCartDetails.splice(i,1);
  //         console.log(this.getCartDetails);
  //         localStorage.setItem( 'localCart', JSON.stringify(this.getCartDetails))

  //       }
  //       this.cartservice.cartData.emit(this.getCartDetails)
  //     }
  //   }    
  // }

  // checkout(){
  //   this.router.navigate(['front/cart/checkout'])
  // }

  // addProducts(){
  //   this.router.navigate(['front/catalogue/product-list'])
  // }

}

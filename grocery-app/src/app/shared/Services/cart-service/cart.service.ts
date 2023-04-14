import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  
  getCartDetails: any;
  product: any;
  productId: any;
  itemsCart:any=[];
  subTotal:number=0;
  quantity=1

  constructor(private toast:ToastrService,private currentProduct:ActivatedRoute , private http:HttpClient) { }

  ngOnInit(){
    this.getProductId()
  }

  cartData = new EventEmitter<[]>
  cartTotal = new EventEmitter<any>

  productData(){
    return this.productsArray
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

  getTotal(){
    if(localStorage.getItem('localCart')){
      this.getCartDetails = JSON.parse(localStorage.getItem('localCart')!)
      this.subTotal = this.getCartDetails.reduce(function(acc: any , val: any){
        return acc +(val.price * val.quantity);
      },0)
    }
  }

  getProductId(){
    this.productId = this.currentProduct.snapshot.paramMap.get('id');
    this.product= this.productsArray.find(x => x.id == this.productId)
  }

  ProductObj:any
  ProductAddObj:any
  product_quantity={
    quantity:this.quantity
  }


  addToCart(product: any){

    product=Object.assign(
      product,
      this.product_quantity
      )
      console.log(product);
      
      let cartDataNull=localStorage.getItem('localCart');
      if(cartDataNull == null){
        
        let storedData : any = []
        storedData.push(product)
        
        localStorage.setItem('localCart' ,JSON.stringify(storedData)) 
        this.toast.success('product added to cart')

    }
    else{

      var id = product.id;
      let index : number = -1;
      
      this.itemsCart=JSON.parse(localStorage.getItem('localCart')!)
      for(let i=0 ; i<this.itemsCart.length ; i++){

        this.ProductObj=this.itemsCart[i];
        this.ProductAddObj=Object.assign(
          this.ProductObj,
          this.product_quantity
        )

        console.log("Product Add object",this.ProductAddObj);
        

        if(parseInt(id) == parseInt(this.itemsCart[i].id)){
          this.itemsCart.quantity = product.quantity;
          index = i;
          break          
        }
      }

      if(index == -1){

        this.itemsCart.push(product);
        localStorage.setItem('localCart' , JSON.stringify(this.itemsCart))
        this.toast.success('product added to cart')
        
      }else{

        localStorage.setItem('localCart' ,JSON.stringify(this.itemsCart))
        this.toast.warning("Product already exist in cart")
      }
    }
 
    this.cartData.emit(this.itemsCart)
  }


  baseUrl= environment.baseUrl
  add_order= environment.add_order
  get_customer_all_orders = environment.get_customer_all_orders
  get_order_by_id = environment.get_order_by_id
  
   
Add_Order(data:any,delivery_address_id:any,billing_address_id:any,payment_status:any,order_status:any){
  try {
    return this.http.post<any>(this.baseUrl+this.add_order,data,{headers: new HttpHeaders({'ngrok-skip-browser-warning': 'skip-browser-warning', 'Access-Control-Allow-Origin': '*',"billing_address_id":billing_address_id,"delivery_address_id":delivery_address_id,"payment_status":payment_status,"order_status":order_status})})
  } catch (error:any) {
    return throwError(() => new Error(error))
  }
}

getAllOrders(){
  try {
    return this.http.get<any>(this.baseUrl+this.get_customer_all_orders,{headers: new HttpHeaders({'ngrok-skip-browser-warning': 'skip-browser-warning', 'Access-Control-Allow-Origin': '*'})})
  } catch (error:any) {
    return throwError(() => new Error(error))
  }
}

getOrderById(order_id:any){
  try {
    return this.http.get<any>(this.baseUrl+this.get_order_by_id,{headers: new HttpHeaders({'ngrok-skip-browser-warning': 'skip-browser-warning', 'Access-Control-Allow-Origin': '*', 'order_id':order_id})})
  } catch (error:any) {
    return throwError(() => new Error(error))
  }
}


}

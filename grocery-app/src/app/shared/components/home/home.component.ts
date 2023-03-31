import { Component } from '@angular/core';
import { CartService } from '../../Services/cart-service/cart.service';
import { ProductDataService } from '../../Services/Product Data-Service/product-data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  productsArray!:any[]

  constructor(private cartservice:CartService , private productservice:ProductDataService){  }

  ngOnInit(){
    this.scroll()

    this.productsArray = this.productservice.productsArray
  }

  scroll(){
    window.scrollBy(0,0)
  }
  

  navCategories=[
    {name:'All'},
    {name:'Vegetables'},
    {name:'Fruits'},
    {name:'Coffee And Teas'},
    {name:'Meat'}
  ]

 topsells=[
  {id:13 ,name:'Orange 1kg' , source:'assets/topsells1.PNG' , price:'2' },
  {id:14 ,name:'Orange 1kg' , source:'assets/topsells2.PNG' , price:'4' },
  {id:15 ,name:'Orange 1kg' , source:'assets/topsells1.PNG' , price:'6' },
  {id:20 ,name:'Orange 1kg' , source:'assets/topsells2.PNG' , price:'15' },
 ]

 toprated=[
  {id:16 ,name:'Orange 1kg' , source:'assets/topsells2.PNG' , price:'6' },
  {id:17 ,name:'Orange 1kg' , source:'assets/topsells1.PNG' , price:'5' },
  {id:18 ,name:'Orange 1kg' , source:'assets/topsells2.PNG' , price:'3' }
 ]

 trendingItems=[
  {id:19 ,name:'Orange 1kg' , source:'assets/topsells1.PNG' , price:'10' },
  {id:20 ,name:'Orange 1kg' , source:'assets/topsells2.PNG' , price:'15' },
  {id:21 ,name:'Orange 1kg' , source:'assets/topsells1.PNG' , price:'13' }
 ]

recentlyAdded=[
  {name:'Orange 1kg' , source:'assets/topsells2.PNG' , price:'20' },
  {name:'Orange 1kg' , source:'assets/topsells1.PNG' , price:'1' },
  {name:'Orange 1kg' , source:'assets/topsells2.PNG' , price:'5' }
]


 features=[
  {title:'Best deals & prices',source:'assets/Capture1.PNG' ,description:'Don t miss our daily amazing deals and prices'},
  {title:'Refundable',source:'assets/Capture2.PNG' ,description:'If your items have damagewe agree to refund it'},
  {title:'Free delivery',source:'assets/Capture3.PNG' ,description:'Do purchase over $50 and get free delivery anywhere'}
 ]

 addToCart(category: any){
  this.cartservice.addToCart(category)
 }

}

import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  ngOnInit(){
    this.scroll
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

  carouselSlide=[
    {source: 'assets/Carousel-slide1.jpg'},
    {source: 'assets/Carousel-slide2.jpg'},
    {source: 'assets/Carousel-slide3.jpg'},
  ]


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
}

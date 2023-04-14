import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/shared/Services/cart-service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router:Router , private cartservice : CartService){}

  ngOnInit(){
    this.cartItemFunc()
    this.scroll()
    this.userExistfunc()
    this.userName()
    this.cartCounter()

    this.router.events.subscribe((res:any)=>{
      if(res.url){
        
        this.cartCounter()
        this.userName()

      }
    })
  }

  scroll(){
    window.scrollBy(0,0)
  }

  cartItem:number=0;
  userExist:boolean=false
  name : any = ''

  cartCounter(){

    let userData =localStorage.getItem('Login Credentials')
    let userName = userData && JSON.parse(userData).username

    let cartProduct = localStorage.getItem(`'${userName}'s_cart`)
    if(cartProduct){
      this.cartItem = JSON.parse(cartProduct).length
    }
    this.cartservice.cartData.subscribe((res : any)=>{
      this.cartItem = res.length
    })
    
  }

  userExistfunc(){

    this.router.events.subscribe((res:any)=>{
      if(res.url){        
        if(localStorage.getItem('token')){
          this.userExist=true
        }else{
          this.userExist=false
        }
      }
    })

  }

  userName(){

    this.name= JSON.parse( localStorage.getItem('User First Name'))
    console.log("UserName",this.name);
    
  }
  
  cartItemFunc(){

    let userData =localStorage.getItem('Login Credentials')
    let userName = userData && JSON.parse(userData).username

    if(localStorage.getItem(`'${userName}'s_cart`) != null){
      var cartCount = JSON.parse(localStorage.getItem(`'${userName}'s_cart`)!)
      console.log(cartCount);
      this.cartItem= cartCount.length      
    }    
  }

}
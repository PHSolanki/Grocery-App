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
  }

  scroll(){
    window.scrollBy(0,0)
  }


  cartCounter(){
    let cartProduct = localStorage.getItem('localCart')
    if(cartProduct){
      this.cartItem = JSON.parse(cartProduct).length
    }
    this.cartservice.cartData.subscribe((res : any)=>{
      this.cartItem = res.length
    })
  }

  cartItem:number=0;
  userExist:boolean=false
  name : any = ''
  

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

    this.router.events.subscribe((res:any)=>{
    let temp_name = localStorage.getItem('Login Credentials')
    let uasername = temp_name && JSON.parse(temp_name)
    this.name = uasername.username
  })
}
  
  cartItemFunc(){
    if(localStorage.getItem('localCart') != null){
      var cartCount = JSON.parse(localStorage.getItem('localCart')!)
      console.log(cartCount);
      this.cartItem= cartCount.length      
    }    
  }

 

}

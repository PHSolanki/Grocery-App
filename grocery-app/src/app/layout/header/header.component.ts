import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router:Router){}

  ngOnInit(){
    this.cartItemFunc()
    this.scroll()
    this.userExistfunc()
    this.userName()
  }

  scroll(){
    window.scrollBy(0,0)
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

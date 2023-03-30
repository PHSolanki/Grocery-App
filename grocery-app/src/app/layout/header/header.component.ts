import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  ngOnInit(){
    this.cartItemFunc()
    this.scroll()
  }

  scroll(){
    window.scrollBy(0,0)
  }

  cartItem:number=0;

  cartItemFunc(){
    if(localStorage.getItem('localCart') != null){
      var cartCount = JSON.parse(localStorage.getItem('localCart')!)
      console.log(cartCount);
      this.cartItem= cartCount.length      
    }    
  }

}

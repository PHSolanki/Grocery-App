import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'grocery-app';

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

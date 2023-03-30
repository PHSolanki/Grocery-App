import { Component } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {

 
  ngOnInit(){
    this.scroll()
  }
  scroll(){
    window.scrollBy(0,0)
  }
}

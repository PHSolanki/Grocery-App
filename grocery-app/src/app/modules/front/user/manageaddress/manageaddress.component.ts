import { Component } from '@angular/core';

@Component({
  selector: 'app-manageaddress',
  templateUrl: './manageaddress.component.html',
  styleUrls: ['./manageaddress.component.css']
})
export class ManageaddressComponent {

  ngOnInit(){
    this.scroll()
  }
  scroll(){
    window.scrollBy(0,0)
  }
}

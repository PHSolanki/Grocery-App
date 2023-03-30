import { Component } from '@angular/core';

@Component({
  selector: 'app-profilenav',
  templateUrl: './profilenav.component.html',
  styleUrls: ['./profilenav.component.css']
})
export class ProfilenavComponent {

  ngOnInit(){
    this.scroll
  }
  scroll(){
    window.scrollBy(0,0)
  }
}

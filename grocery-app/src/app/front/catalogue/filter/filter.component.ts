import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {


  constructor(private currentProduct:ActivatedRoute){}

  ngOnInit(){
    this.getProduct()
  }

  selectedValue:any ='all'

  @Output()
  selectCategory : EventEmitter<any> = new EventEmitter<any>()

  getCategory(){
    this.selectCategory.emit(this.selectedValue)
    // console.log(this.selectedValue) 
  }

  getProduct(){
    this.currentProduct.paramMap.subscribe((x)=>{
      if(x.get('name')==null){
        this.selectedValue = "all"
      }else{
        this.selectedValue= x.get('name')
      }
    })
}
}



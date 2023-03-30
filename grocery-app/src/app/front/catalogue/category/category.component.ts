import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  constructor(private router:Router , private activatedroute:ActivatedRoute){}

  

  food: any;

  category:any;
  category_name:any;

  ngOnInit(){
    this.category_name=this.activatedroute.snapshot.paramMap.get('name');
    this.category=this.categories.find(x=>x.name==this.category_name)   

    this.scroll()
  }

scroll(){
  window.scrollTo(0,0)
}

  navCategories=[
    {name:'All'},
    {name:'Vegetables'},
    {name:'Fruits'},
    {name:'Coffee And Teas'},
    {name:'Meat'}
  ]

  categories=[
    {name: 'Fruits' , num_of_items:'20 ', source : 'assets/fruits.jpg' },
    {name: 'Vegetables' , num_of_items:'25', source : 'assets/vegetables.jpg' },
    {name: 'Coffee' , num_of_items:'27 ', source : 'assets/coffee.jpg' },
    {name: 'Tea' , num_of_items:'10 ', source : 'assets/tea.jpg' },
    {name: 'Meat' , num_of_items:'30 ', source : 'assets/meat.jpeg' },
    {name: 'Meat' , num_of_items:'30 ', source : 'assets/meat.jpeg' },
    {name: 'Meat' , num_of_items:'30 ', source : 'assets/meat.jpeg' },
    {name: 'Meat' , num_of_items:'30 ', source : 'assets/meat.jpeg' },
  ]

  categories2=[
    {name: 'Fruits' , num_of_items:'20 ', source : 'assets/fruits.jpg' },
    {name: 'Vegetables' , num_of_items:'25', source : 'assets/vegetables.jpg' },
    {name: 'Coffee' , num_of_items:'27 ', source : 'assets/coffee.jpg' },
    {name: 'Meat' , num_of_items:'30 ', source : 'assets/meat.jpeg' },
    {name: 'Tea' , num_of_items:'10 ', source : 'assets/tea.jpg' }

   ]

}

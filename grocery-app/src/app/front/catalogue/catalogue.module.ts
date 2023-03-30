import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogueRoutingModule } from './catalogue-routing.module';
import { CategoryComponent } from './category/category.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HomeComponent } from '../home/home.component';
import { FilterComponent } from './filter/filter.component';
import { FormsModule } from '@angular/forms'


@NgModule({
  declarations: [
    ProductDetailsComponent,
    
    
  ],
  imports: [
    CommonModule,
    CatalogueRoutingModule,
    FormsModule,
  ]
})
export class CatalogueModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from '../cart/cart/cart.component';
import { CategoryComponent } from './category/category.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {path:'category' , component:CategoryComponent},
  {path:'product-list' , component:ProductListComponent},
  {path:'product-list/:name' , component:ProductListComponent},
  {path:'product-details/:id' , component:ProductDetailsComponent},
  {path:'product-details/:name' , component:ProductDetailsComponent},
  {path:'front/catalogue/product-details/:id' , component:ProductDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogueRoutingModule { }

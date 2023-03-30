import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontRoutingModule } from './front-routing.module';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './catalogue/category/category.component';
import { FormsModule } from '@angular/forms';
import { CheckoutComponent } from './cart/checkout/checkout.component';
import { SuccessComponent } from './cart/success/success.component';


@NgModule({
  declarations: [
    CheckoutComponent,
    SuccessComponent
  ],
  imports: [
    CommonModule,
    FrontRoutingModule,
    FormsModule
  ]
})
export class FrontModule { }

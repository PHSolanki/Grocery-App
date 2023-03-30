import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from '../error/error.component';
import { CartComponent } from './cart/cart/cart.component';
import { ProductDetailsComponent } from './catalogue/product-details/product-details.component';
import { CheckoutComponent } from './cart/checkout/checkout.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
{path: '',redirectTo: 'home',pathMatch: 'full'}, 

{path: 'home',component: HomeComponent}, 

{path: 'user',    
  loadChildren: () => import ('./user/user.module').then(m => m.UserModule)},  

{path: 'catalogue',
  loadChildren: () => import ('./catalogue/catalogue.module').then(u => u.CatalogueModule)},

{path:'cart',
  loadChildren: () => import('./cart/cart.module').then(m => m.CartModule)},
  
{path: '**',component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontRoutingModule { }

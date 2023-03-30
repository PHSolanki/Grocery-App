import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './shared/components/home/home.component';

import { SuccessComponent } from './modules/front/cart/success/success.component';
import { CartComponent } from './modules/front/cart/cart/cart.component';
import { CheckoutComponent } from './modules/front/cart/checkout/checkout.component';


const routes: Routes = [{
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
}, {
    path: 'home',
    component: HomeComponent
}, {
    path: 'front',
    loadChildren: () => import ('./modules/front/front.module').then(u => u.FrontModule)
},{
    path: '**',
    component: ErrorComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

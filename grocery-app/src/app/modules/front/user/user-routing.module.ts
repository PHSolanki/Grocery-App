import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorComponent } from 'src/app/error/error.component';
import { AuthGuard } from 'src/app/shared/Guards/auth.guard';
import { UserGuard } from 'src/app/shared/Guards/user.guard';
import { HomeComponent } from '../../../shared/components/home/home.component';
import { AddAddressComponent } from './add-address/add-address.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { LoginComponent } from './login/login.component';
import { ManageaddressComponent } from './manageaddress/manageaddress.component';
import { OrdersComponent } from './orders/orders.component';
import { ProfilenavComponent } from './profilenav/profilenav.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'login' ,canActivate:[UserGuard] ,component:LoginComponent},
  {path:'register' , canActivate:[UserGuard],component:RegistrationComponent},
  {path:'user-profile' ,canActivate:[AuthGuard], component:UserProfileComponent},
  {path:'orders' , canActivate:[AuthGuard], component:OrdersComponent},
  {path:'manageaddress' , canActivate:[AuthGuard] , component:ManageaddressComponent},
  {path:'add-address' , canActivate:[AuthGuard] , component:AddAddressComponent},
  {path:'edit-address/:id' , canActivate:[AuthGuard] , component:AddAddressComponent},
  {path:'changepassword' , canActivate:[AuthGuard], component:ChangepasswordComponent},
  {path:'**',component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

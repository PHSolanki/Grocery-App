import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorComponent } from 'src/app/error/error.component';
import { HomeComponent } from '../../../shared/components/home/home.component';
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
  {path:'login' , component:LoginComponent},
  {path:'register' , component:RegistrationComponent},
  {path:'user-profile' , component:UserProfileComponent},
  {path:'orders' , component:OrdersComponent},
  {path:'manageaddress' , component:ManageaddressComponent},
  {path:'changepassword' , component:ChangepasswordComponent},
  {path:'**',component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

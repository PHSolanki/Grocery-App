import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CategoryComponent } from '../catalogue/category/category.component';
import { OrdersComponent } from './orders/orders.component';

import { ProfilenavComponent } from './profilenav/profilenav.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ManageaddressComponent } from './manageaddress/manageaddress.component';
import { HttpClientModule } from '@angular/common/http';
import { AddAddressComponent } from './add-address/add-address.component';


@NgModule({
  declarations: [  
    OrdersComponent,
    ProfilenavComponent,
    ChangepasswordComponent,
    ManageaddressComponent,
    UserProfileComponent,
    LoginComponent,
    RegistrationComponent,
    AddAddressComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[ProfilenavComponent]
})
export class UserModule { }

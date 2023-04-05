import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { editUserService } from 'src/app/shared/Services/Edit user-Service/edituser.service';

@Component({
  selector: 'app-manageaddress',
  templateUrl: './manageaddress.component.html',
  styleUrls: ['./manageaddress.component.css']
})
export class ManageaddressComponent {

  constructor(private manageaddress : editUserService){}

  ngOnInit(){
    this.scroll()
    this.manage_addressFunc()
  }
  scroll(){
    window.scrollBy(0,0)
  }

  user_addresses:any=[]

  manage_addressFunc(){
    this.manageaddress.getUserDetails().subscribe((res)=>{
      console.log(res);
      this.user_addresses=res.data.addresses

      console.log(this.user_addresses);
      

      
    })
  }

  }

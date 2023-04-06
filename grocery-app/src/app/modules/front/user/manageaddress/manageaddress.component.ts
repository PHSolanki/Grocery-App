import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { editUserService } from 'src/app/shared/Services/Edit user-Service/edituser.service';
import { EncryptionService } from 'src/app/shared/Services/encryption/encryption.service';

@Component({
  selector: 'app-manageaddress',
  templateUrl: './manageaddress.component.html',
  styleUrls: ['./manageaddress.component.css']
})
export class ManageaddressComponent {

  user_addresses:any=[]
  encrypted_address_id:any

  constructor(private manageaddress : editUserService , private router:Router , private _encryptionservice : EncryptionService){}
  
  ngOnInit(){
    this.scroll()
    this.manage_addressFunc()
  }

  scroll(){
    window.scrollBy(0,0)
  }

  
  manage_addressFunc(){
    this.manageaddress.getUserDetails().subscribe((res)=>{
      console.log(res);
      this.user_addresses=res.data.addresses

      console.log("user_addresses",this.user_addresses);    
    })
  }

  deleteCustomerAddress(address_id:any ,i:any ){
   
    this._encryptionservice.Encryption(address_id.toString()).subscribe((res)=>{
      console.log((res));
      
      this.encrypted_address_id = res.data
      
     
      this.manageaddress.deleteCustomerAddress(this.encrypted_address_id).subscribe((res)=>{
        console.log(res);
      })  
      
      // let index = this.user_addresses.findIndex((ele:any)=>ele.index==address_id)

      this.user_addresses.splice(i,1)

    })



    
  }
}

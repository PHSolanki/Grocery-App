import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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

  constructor(private manageaddress : editUserService , private _encryptionservice : EncryptionService , private toaster:ToastrService){}
  
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

txt:boolean=false

  prompt_Fun(x:any){

    if(confirm(x)){
      this.txt=true
    }else{
      this.txt=false
    }

  }
  deleteCustomerAddress(address_id:any ,i:any ){

    this.prompt_Fun("Are you Sure?")

   if(this.txt){

     this._encryptionservice.Encryption(address_id.toString()).subscribe((Encrypted_address_Id_res)=>{
       console.log((Encrypted_address_Id_res));
      
      this.encrypted_address_id = Encrypted_address_Id_res.data
      
     
      this.manageaddress.deleteCustomerAddress(this.encrypted_address_id).subscribe((deleted_address_res)=>{
        console.log(deleted_address_res);

        if(deleted_address_res){
          this.toaster.success("Data Deleted")
        }
      })  

      this.user_addresses.splice(i,1)

    })
    
  }

  }
}

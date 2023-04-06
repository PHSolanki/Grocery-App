import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { editUserService } from 'src/app/shared/Services/Edit user-Service/edituser.service';

@Component({
  selector: 'app-manageaddress',
  templateUrl: './manageaddress.component.html',
  styleUrls: ['./manageaddress.component.css']
})
export class ManageaddressComponent {

  user_addresses:any=[]

  constructor(private manageaddress : editUserService , private router:Router){}
  
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

  deleteCustomerAddress(data:any){
    this.manageaddress.deleteCustomerAddress(data.id).subscribe((res)=>{
      console.log(res);
    })
    console.log(data);
    
  }
}

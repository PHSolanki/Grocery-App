import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { editUserService } from 'src/app/shared/Services/Edit user-Service/edituser.service';

@Component({
  selector: 'app-manageaddress',
  templateUrl: './manageaddress.component.html',
  styleUrls: ['./manageaddress.component.css']
})
export class ManageaddressComponent {


  addresses !:any | null []

  constructor(private manageaddress : editUserService){}

  ngOnInit(){
    this.scroll()
  }
  scroll(){
    window.scrollBy(0,0)
  }

  manage_Address = new FormGroup({
    address_line_1 : new FormControl('' , [Validators.required]),
    address_line_2 : new FormControl('' , [Validators.required]),
    area : new FormControl('' , [Validators.required]),
    city : new FormControl('' , [Validators.required]),
    state : new FormControl('' , [Validators.required]),
    country : new FormControl('' , [Validators.required]),
    postal_code : new FormControl('' , [Validators.required]),
    landmark : new FormControl('' , [Validators.required]),
    tag : new FormControl('' ,[Validators.required]),
  })

  Save_Address(){

    if(this.manage_Address.valid){

      this.manageaddress.manage_address(this.manage_Address.value).subscribe((res)=>{
        console.log((res));
        
        localStorage.setItem('Address' , JSON.stringify(res.data))

        this.addresses=JSON.parse(localStorage.getItem('Address')!)
        console.log(this.addresses);
        
      })
    }


  }

  get get_Address(){
    return this.manage_Address.controls
  }
}

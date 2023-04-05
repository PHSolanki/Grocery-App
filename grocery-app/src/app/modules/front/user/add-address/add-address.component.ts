import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { editUserService } from 'src/app/shared/Services/Edit user-Service/edituser.service';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent {

  addresses !:any | null []

  constructor(private add_address : editUserService){}

  ngOnInit(){
    this.scroll()
  }
  scroll(){
    window.scrollBy(0,0)
  }

  add_Address = new FormGroup({
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

    if(this.add_Address.valid){

      this.add_address.add_addressFunc(this.add_Address.value).subscribe((res)=>{
        console.log((res));
        
        localStorage.setItem('Address' , JSON.stringify(res.data))

        this.addresses=JSON.parse(localStorage.getItem('Address')!)
        console.log(this.addresses);
        
      })
    }


  }

  get get_Address(){
    return this.add_Address.controls
  }


}

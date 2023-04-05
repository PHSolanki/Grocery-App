import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { editUserService } from 'src/app/shared/Services/Edit user-Service/edituser.service';
import { EncryptionService } from 'src/app/shared/Services/encryption/encryption.service';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent {

  addresses !:any | null []

  constructor(private add_address : editUserService,private route:ActivatedRoute,private _encryptionservice:EncryptionService){}
  
  Edit_Address_Id:any

  btn_name="ADD Address"
  ngOnInit(){
    
    this.route.paramMap.subscribe((params)=>{
      this.Edit_Address_Id=params.get('id')
      console.log("Edit_Address_Id",this.Edit_Address_Id)
      if(this.Edit_Address_Id){
        this.btn_name="Edit Address"
      }
    })
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
    postal_code : new FormControl('' , [Validators.required , Validators.maxLength(6) , Validators.pattern('^[0-9]{6}(?:-[0-9]{4})?$')]),
    landmark : new FormControl('' , [Validators.required]),
    tag : new FormControl('' ,[Validators.required]),
  })

  encryption_data:any
  
  Save_Address(){
    console.log("this.add_Address.value",this.add_Address.value)
    if(!this.Edit_Address_Id){
    if(this.add_Address.valid){

      this.add_address.add_addressFunc(this.add_Address.value).subscribe((res)=>{
        console.log((res));
        
        localStorage.setItem('Address' , JSON.stringify(res.data))

        this.addresses=JSON.parse(localStorage.getItem('Address')!)
        console.log(this.addresses);
        
      })
    }
  }else{
    this._encryptionservice.Encryption(this.Edit_Address_Id).subscribe({next:(encryption_res)=>{
      console.log("encryption_res",encryption_res)
      this.encryption_data=encryption_res.data
       console.log("encryption_data",this.encryption_data)
       this.updateCustomerAddress(this.encryption_data)
    },error:(encryption_error)=>{
      console.log("encryption_error",encryption_error)
    }})
  }

  }

  get get_Address(){
    return this.add_Address.controls
  }

  updateCustomerAddress(encryption:any){

    this.add_address.updateCustomerAddress(this.add_Address.value,encryption).subscribe((res)=>{
      console.log("res",res);
      // this.router.navigate(['/front/user/add-address'])
      // this.btn_name="ADD Address"
    })
    
    
  }
}

import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Add_User_Address } from 'src/app/shared/interface/data-type';
import { CountryService } from 'src/app/shared/Services/Country/country.service';
import { editUserService } from 'src/app/shared/Services/Edit user-Service/edituser.service';
import { EncryptionService } from 'src/app/shared/Services/encryption/encryption.service';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent {

  constructor(private add_address : editUserService,private route:ActivatedRoute,private _encryptionservice:EncryptionService ,private _countryservice:CountryService , private toaster:ToastrService){
    this.countries = this._countryservice.getCountries();
  }
  
  Edit_Address_Id:any
  btn_name="ADD Address"
  encrypted_data:any
  image_name="Add Address"
  user_address:any

  states:any=[]
  City:any=[]
  countries:any
  cities: string[] = [];
  add_Address:any
  
  ngOnInit(){
    this.getAddressId()  
    this.scroll()
    this.setAddressValue()
    this.User_Address_Add()
    this.country.valueChanges.subscribe((country) => {
  
      if (country) {
        this.states = this._countryservice.getStatesByCountry(country);
    
        this.state.valueChanges.subscribe((state) => {
      
          if (state) {
            this.City = this._countryservice.getCitiesByState(this.country.value, state);      
          }
        });
      }
    }); 
    
  }

  scroll(){
    window.scrollBy(0,0)
  }

  getAddressId(){
    this.route.paramMap.subscribe((params)=>{

      this.Edit_Address_Id=params.get('id')
      console.log("Edit_Address_Id",this.Edit_Address_Id)

      if(this.Edit_Address_Id){

        this.btn_name="Edit Address"
        this.image_name="Update Address"

      }
    })
  }

  country = new FormControl ("",[
    Validators.required
  ]);
  state = new FormControl ("",[
    Validators.required
  ]);
  city = new FormControl ("",[
    Validators.required
  ])

  User_Address_Add(){

    this.add_Address = new FormGroup({
      address_line_1 : new FormControl('' , [Validators.required]),
      address_line_2 : new FormControl('' , [Validators.required]),
      area : new FormControl('' , [Validators.required]),
      city:this.city,
      state:this.state,
      country:this.country,
      postal_code : new FormControl('' , [Validators.required , Validators.maxLength(6) , Validators.pattern('^[0-9]{6}(?:-[0-9]{4})?$')]),
      landmark : new FormControl('' , [Validators.required]),
      tag : new FormControl('' ,[Validators.required]),
    })
    
  }
    
  
  Save_Address(){

    console.log("this.add_Address.value",this.add_Address.value)

    if(!this.Edit_Address_Id){

      if(this.add_Address.valid){

        this.add_address.add_addressFunc(this.add_Address.value).subscribe((res:any)=>{
          console.log((res));

          if(res){

            if(res.success==true){
              this.toaster.success("Address added successfully")
            }else{
              this.toaster.error(res.message)
            }
            
          }
        })
      }
      
    }else{

    this._encryptionservice.Encryption(this.Edit_Address_Id).subscribe({next:(encryption_res)=>{
      console.log("encryption_res",encryption_res)

      this.encrypted_data=encryption_res.data
       console.log("encryption_data",this.encrypted_data)
       
       this.updateCustomerAddress(this.encrypted_data)
    },error:(encryption_error)=>{
      console.log("encryption_error",encryption_error)
    }})

  }

  }

  get get_Address(){
    return this.add_Address.controls
  }

  updateCustomerAddress(encrypted_id:any){

    this.add_address.updateCustomerAddress(this.add_Address.value,encrypted_id).subscribe({next:(res:any)=>{
      console.log("res",res);
      if(res){

        if(res.success=true){
          this.toaster.success(res.message)
        }
        
      }

    },error:(err)=>{
      this.toaster.error(err.error.message)
    }
    })
    
  }

  setAddressValue(){

    this.add_address.getUserDetails().subscribe((res)=>{
      
      this.user_address=res.data.addresses;

      this.user_address=this.user_address.filter((ele:any) => ele.id==this.Edit_Address_Id);

      this.add_Address.setValue({

        address_line_1: this.user_address[0].address_line_1,
        address_line_2: this.user_address[0].address_line_2,
        area: this.user_address[0].area,
        country: this.user_address[0].country,
        state: this.user_address[0].state,
        city: this.user_address[0].city,
        postal_code: this.user_address[0].postal_code,
        landmark: this.user_address[0].landmark,
        tag: this.user_address[0].tag

      })
    })
  }
}

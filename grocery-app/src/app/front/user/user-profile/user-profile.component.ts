import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {

  public user: any;
  RegisterData:any
  
  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
  
    }

    Profile =new FormGroup({
      firstname:new FormControl ("",Validators.required),
      lastname:new FormControl ("",Validators.required),
      email:new FormControl ("",[Validators.required, Validators.email]),
      alternateemail:new FormControl ("",[Validators.required,Validators.email]),
      contact:new FormControl('',[Validators.required,Validators.pattern("[7-9]{1}[0-9]{9}")]),
      alternatecontact:new FormControl('',[Validators.required,Validators.pattern("[7-9]{1}[0-9]{9}")]),
      dob:new FormControl('',[Validators.required])   
    })
   
       get get_Profile(){
         return this.Profile.controls
       }
   
       Save_Profile(){
         if(this.Profile.valid){
   
           console.log(this.Profile.value)
           
         }
     
       }

}

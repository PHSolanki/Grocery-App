import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Edit_user_detail } from 'src/app/shared/interface/data-type';
import { editUserService } from 'src/app/shared/Services/Edit user-Service/edituser.service';




@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {

  public user: any;
  RegisterData:any
  resetData: any;

  
  constructor(private route: ActivatedRoute , private edituser: editUserService , private toaster:ToastrService) { }

  ngOnInit(): void {
    this.getUserDetails() 
    
    
  }

   
    get get_Profile(){
      return this.Profile.controls
    }
   
    

      Profile=new FormGroup({
        first_name:new FormControl ("",Validators.required),
        last_name:new FormControl ("",Validators.required),
        password:new FormControl ("",[Validators.required,Validators.minLength(4)]),
        secondary_email:new FormControl ("",[Validators.required,Validators.email]),
        secondary_mobile_number:new FormControl('',[Validators.required,Validators.pattern("[7-9]{1}[0-9]{9}")]),
        date_of_birth:new FormControl('',[Validators.required])   
      })
    
    Save_Profile(){

      if(this.Profile.valid){   
        console.log(this.Profile.value)
        this.edituser.editUser(this.Profile.value).subscribe((Profile_res)=>{
          console.log(Profile_res);
          
          if(Profile_res){

            if(Profile_res.success=true){
              this.toaster.success(Profile_res.message)
            }

          }

        },(err)=>{
          this.toaster.error(err.error.message)
        })
           
      }
    }

    getUserDetails(){
      this.edituser.getUserDetails().subscribe((res)=>{
        if(res){
          this.resetData = res.data;
          console.log(this.resetData);
          this.Profile.setValue({
           first_name: this.resetData.first_name || "",
           last_name:this.resetData.last_name || '',
           secondary_mobile_number: "",
           secondary_email: "",
           date_of_birth:"",
           password: "",   
          })
        }
        console.log(res);        
      })
    }

}

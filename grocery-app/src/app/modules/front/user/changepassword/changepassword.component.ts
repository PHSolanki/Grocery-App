import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { editUserService } from 'src/app/shared/Services/Edit user-Service/edituser.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent {

  constructor(private changepassword:editUserService , private toaster:ToastrService){}

  ngOnInit(){
    this.scroll()
    this.User_Change_password()
  }
  
  scroll(){
    window.scrollBy(0,0)
  }

  changePass:any

  User_Change_password(){

    this.changePass = new FormGroup({
      oldPassword : new FormControl("" , [Validators.required,Validators.minLength(4)]),
      newPassword : new FormControl("" , [Validators.required,Validators.minLength(4)]),
      confirmNewPass : new FormControl("" , [Validators.required,this.matchPasswordValidator()])
    })
    
  }

  get get_password(){
    return this.changePass.controls
  }

  matchPasswordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const newPassword = control.root.get('newPassword')?.value;
      const confirmPassword = control.value;
      
      return newPassword === confirmPassword ? null : { matchPassword: { value: control.value } };
    };
  }
  
  Change_Pass(){
  
    console.log(this.changePass.value);
      
    this.changepassword.changePassword(this.changePass.value).subscribe((Change_password_res)=>{
    console.log(Change_password_res); 
    
    if(Change_password_res){

      if(Change_password_res.success=true){
        this.toaster.success(Change_password_res.message)
      }

    }
    },(err)=>{
      this.toaster.error(err.error.message)
    })
  }
  
    
  
  
}

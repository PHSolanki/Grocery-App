import { compileNgModule } from '@angular/compiler';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ChangepasswordService } from 'src/app/shared/Services/Change Password-Service/changepassword.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent {

  constructor(private changepassword:ChangepasswordService){}

  ngOnInit(){
    this.scroll()
  }
  
  scroll(){
    window.scrollBy(0,0)
  }
  
  changePass = new FormGroup({
    oldPassword : new FormControl("" , [Validators.required,Validators.minLength(4)]),
    newPassword : new FormControl("" , [Validators.required,Validators.minLength(4)]),
    confirmNewPass : new FormControl("" , [Validators.required,this.matchPasswordValidator()])
  })

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
      
      this.changepassword.changePassword(this.changePass.value).subscribe((res)=>{
        console.log(res);      
      })
    }
  
    
  
  
}

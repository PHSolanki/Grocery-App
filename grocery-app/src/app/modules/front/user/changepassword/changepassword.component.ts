import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent {

  ngOnInit(){
    this.scroll()
  }
  scroll(){
    window.scrollBy(0,0)
  }

  changePass = new FormGroup({
    currentPass : new FormControl("" , [Validators.required,Validators.minLength(4)]),
    newPass : new FormControl("" , [Validators.required,Validators.minLength(4)]),
    confirmNewPass : new FormControl("" , [Validators.required,this.matchPasswordValidator()])
  })

  get get_password(){
    return this.changePass.controls
  }

  matchPasswordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const newpassword = control.root.get('newPass')?.value;
      const confirmPassword = control.value;

      return newpassword === confirmPassword ? null : { matchPassword: { value: control.value } };
    };
}
}

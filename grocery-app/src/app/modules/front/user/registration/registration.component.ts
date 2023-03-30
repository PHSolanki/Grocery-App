import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/Services/auth.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

    constructor(private _authservice:AuthService){}

      @Input() User_Register: any = new FormGroup({
        first_name: new FormControl('', [Validators.required,Validators.minLength(3)]),
        last_name: new FormControl('', [Validators.required, Validators.minLength(3)]),
        primary_mobile_number: new FormControl('', [Validators.required,Validators.pattern('[7-9]{1}[0-9]{9}')]),
        primary_email: new FormControl('', [Validators.required, Validators.email]),
        username:new FormControl('',[Validators.required]),
        password: new FormControl('', [Validators.required, Validators.minLength(5)]),
      });
    
      get get_User_Register() {
        return this.User_Register.controls;
      }

      loading = true;
      errorMessage = "";

      Save_User_Register() {

        if (this.User_Register.valid) {

          console.log(this.User_Register.value);
          this._authservice.User_Register(this.User_Register.value).subscribe((User_Register_res: any)=>{
            console.log("User_Register_res",User_Register_res)
            this.errorMessage=""
          }
          ,(Register_error: { status: number; error: { error: { errors: { message: any; }[]; }; }; })=>{ 
            console.log("Register_error.status",Register_error.status)
            if(Register_error.status==400){

              this.errorMessage="User Already Exists"

            }else{
  
              this.errorMessage = Register_error.error.error.errors[0].message;
              this.loading = false;
              console.log('error caught in component',Register_error.error.error.errors[0].message)
              
            }
          }
          )
        }
      }
    }


import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/Services/Registration-service/registration.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

    constructor(private _authservice:AuthService , private _toastservice: ToastrService){}

      @Input() User_Register: any = new FormGroup({
        first_name: new FormControl('', Validators.required),
        last_name: new FormControl('', Validators.required),
        primary_mobile_number: new FormControl('', [Validators.required,Validators.pattern("[7-9]{1}[0-9]{9}")]),
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

            if(User_Register_res){

              console.log("User_Register_res",User_Register_res)
              this.errorMessage=""
              this._toastservice.success("Registration Successful")

            }

          },(Register_error) => {

              console.log('Register_error.status', Register_error.status);
              if (Register_error.status == 400){

                this.errorMessage = 'User Already Exists';
                this._toastservice.error('User Already Exists', '', {positionClass: 'toast-bottom-center'});

              }else{

                this.errorMessage = Register_error.error.error.errors[0].message;
                this.loading = false;
                this._toastservice.error(Register_error.error.error.errors[0].message);
                console.log('error caught in component',Register_error.error.error.errors[0].message);

              }
            }
          )
        }
      }
    }


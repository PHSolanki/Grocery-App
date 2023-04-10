import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/Services/Login-service/login.service';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  loginFormValue:any
  username:any

  constructor(private userservice:UserService , private router:Router , private toaster : ToastrService){}

  ngOnInit(){
    this.scroll()
  }

  scroll(){
    window.scrollBy(0,0)
  }
  
  loginForm = new FormGroup({
    username: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required, Validators.minLength(4)]),
  })

  get get_login_details(){
    return this.loginForm.controls
  }
  
  Save_User_Login(){
    if(this.loginForm.valid){
      
      console.log(this.loginForm.value)
      this.loginFormValue=this.loginForm.value

      localStorage.setItem('Login Credentials', JSON.stringify(this.loginFormValue))

      this.userservice.userLogin(this.loginFormValue).subscribe((User_login_res:any)=>{
        
      console.log("User_login_res",User_login_res.data.user.first_name);

      this.username=User_login_res.data.user.first_name

      localStorage.setItem('User First Name' , JSON.stringify(this.username) )

      localStorage.setItem("token" , User_login_res.data.token);
      this.router.navigate(['/home'])
      this.toaster.success('Login Successful')

        
      })
    }
    

  }




submit(){
  console.log(this.loginForm.value);
};

}

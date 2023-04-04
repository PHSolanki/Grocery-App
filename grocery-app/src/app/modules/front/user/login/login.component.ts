import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/Services/Login-service/login.service';
import { User_Login_Model } from 'src/data-type';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  loginFormValue:any

  constructor(private userservice:UserService , private router:Router){}

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
        
      console.log("User_login_res",User_login_res);
      localStorage.setItem("token" , User_login_res.data);
      this.router.navigate(['/home'])

        
      })
    }

  }




submit(){
  console.log(this.loginForm.value);
};

}

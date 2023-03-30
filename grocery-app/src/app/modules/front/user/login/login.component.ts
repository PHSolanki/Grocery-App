import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  ngOnInit(){
    this.scroll()
  }

  scroll(){
    window.scrollBy(0,0)
  }
  
  loginForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required, Validators.minLength(8)]),
  })

  get get_login_details(){
    return this.loginForm.controls
  }

  Save_User_Login(){

  }




submit(){
  console.log(this.loginForm.value);
};

}

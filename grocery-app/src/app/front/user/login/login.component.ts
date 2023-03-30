import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  loginForm = new FormGroup({
    fname: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required, Validators.minLength(8)]),
  })


get fname(){
  return this.loginForm.get('fname')
};


get password(){
  return this.loginForm.get('password')
};


submit(){
  console.log(this.loginForm.value);
};


//#region 
// userSingUp!:FormGroup;
// userLogin!:FormGroup
// loginForm:boolean = false
// constructor( ) {}

// ngOnInit(){
//   this.user.userSingupLoginReload();
//   this.userSingUp = new FormGroup({
//     name: new FormControl(null,[Validators.required]),
//     email: new FormControl(null,[Validators.required,Validators.email]),
//     pass: new FormControl(null,[Validators.required,Validators.minLength(6)])
//   })
//   this.userLogin = new FormGroup({
//     email: new FormControl(null,[Validators.required,Validators.email]),
//     pass: new FormControl(null,[Validators.required,Validators.minLength(6)])
//   })
// }

// showLoginOrRegister(){
//    this.loginForm = !this.loginForm
// }


// singUP(data:signUp ){
//   console.log(data);
//   this.user.userSingUp(data)
//   this.showLoginOrRegister()
// }
// reset(){
//   this.userSingUp.reset();
//   this.userLogin.reset();
// }
// login(data:login){
//   console.log(data);
//   this.user.userLogin(data)
// }
}

import { Component } from '@angular/core';
import { LoginModel } from '../login-model';
import { AuthenticationService } from '../authentication.service';
import {CookieService} from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  response:any;
loginModel=new LoginModel("","");
constructor(private router:Router,private cookie:CookieService,private _authService:AuthenticationService){}
onLogin(){
  console.log(this.loginModel);
  this._authService.login(this.loginModel).subscribe(
    (data)=>{
      this.response=data
      if(this.response.message=="valid login"){
        this.cookie.set('username',this.loginModel.username);
        this.router.navigate(['/dashboard']);

      }
}
)
}
  
}


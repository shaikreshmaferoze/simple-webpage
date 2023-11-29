import { Component } from '@angular/core';
import { SignupModel } from '../signupmodel';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  response:any;
  signupModel=new SignupModel("","","","");
  constructor(private _authService:AuthenticationService){}

  onSignup(){
    console.log(this.signupModel);
    this._authService.register(this.signupModel).subscribe(
      (data)=>{
        this.response=data;
 }
)
}
  
    
  }



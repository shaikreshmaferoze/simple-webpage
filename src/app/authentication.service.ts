import { HttpClient,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignupModel } from './signupmodel';
import { LoginModel } from './login-model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  _registerapi='http://127.0.0.1:2000/registerUser'
  _loginapi='http://127.0.0.1:2000/loginUser'

  constructor(private _http:HttpClient) { }

  register(signupModel:SignupModel){
      const params=new HttpParams()
      .set('name',signupModel.name)
      .set('email',signupModel.email)
      .set('username',signupModel.username)
      .set('password',signupModel.password);

      return this._http.get(this._registerapi,{params});
  }

  login(loginModel:LoginModel){
    const params=new HttpParams()
    .set('username',loginModel.username)
    .set('password',loginModel.password);

    return this._http.get(this._loginapi,{params});
  }
}
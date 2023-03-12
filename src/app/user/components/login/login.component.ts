import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthClient } from 'src/app/generated/api-Service';
import { AlerterService } from 'src/app/shared/Services/alerter.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  showPassword : boolean = false;
  formLogin: FormGroup;
  constructor(
    private readonly router:Router,
    private readonly alerterService : AlerterService,
    private readonly _authClient : AuthClient
  ) {
    this.formLogin = new FormGroup({
      email : new FormControl("",[Validators.required,Validators.email]),
      password : new FormControl("",[Validators.required,Validators.minLength(8)]),
      rememberMe : new FormControl(true),
    });
  }
  
  Login()
  {
    let item = this.formLogin.value;
    var result = this._authClient.login(item);
    result.subscribe((data) => {
      if(data.isSuccess){
        this.alerterService.AlertSuccess(data.message);
        this.router.navigate(["/app"]);

      }else{
        this.alerterService.AlertInfo(data.message);
      }
      console.log(data);
    },(error) => {
      this.alerterService.ErrorServer();
      console.log(error);
    })
  }
}

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ResponseDto } from 'src/app/shared/Dtos/ResponseDto';
import { AlerterService } from 'src/app/shared/Services/alerter.service';
import { AuthService } from 'src/app/shared/Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
showPassword : boolean = false;
  constructor(
    private readonly _authService: AuthService,
    private readonly _alerterService: AlerterService
    )
     {}

  public formRegister: FormGroup = new FormGroup({
    Email: new FormControl("",[Validators.required, Validators.minLength(4),Validators.email]),
    UserName: new FormControl("",[Validators.required, Validators.minLength(4)]),
    Password: new FormControl("",[Validators.required, Validators.minLength(4)]),
    ConfirmPassword: new FormControl("",[Validators.required]),
    Telephone: new FormControl(""),
  });
  async Register() {
    if (this.formRegister.valid) {
      let response = await this._authService.Register(this.formRegister.value);
      response.subscribe(
        (data: ResponseDto) => {
          if(data.isSuccess == true){
            this._alerterService.AlertSuccess(data.message);
          }else{
            this._alerterService.AlertError(data.message);
            if(data.errors != null){
              for(var i = 0; i < data.errors.length ;i++)
              {
                this._alerterService.AlertError(data.errors[i].toLocaleLowerCase());
              }
            }
          }
        },
        (error: any) => {
          if(error.errors != null){
            for(var i = 0; i < error.errors.length ;i++)
            {
              this._alerterService.AlertError(error.errors[i].toLocaleLowerCase());
            }
          }
          console.log(error);
        }
        );
      }
  }
  ResetForm(){
    this.formRegister.reset();
  }
}

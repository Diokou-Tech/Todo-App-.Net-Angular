import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  showPassword : boolean = false;
  Login() : boolean
  {
    alert("login");
    return false;
  }
}

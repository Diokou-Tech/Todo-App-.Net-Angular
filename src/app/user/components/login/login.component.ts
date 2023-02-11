import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlerterService } from 'src/app/shared/Services/alerter.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  showPassword : boolean = false;

  constructor(
    private readonly router:Router,
    private readonly alerterService : AlerterService
  ) {}
  
  Login()
  {
    this.alerterService.AlertSuccess("Login Succès dans l'apllication !");
    this.alerterService.AlertSuccess("Login l'apllication !");
    this.router.navigate(["/app"]);
    // return false;
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { IndexComponent } from './components/index/index.component';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    IndexComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule,
  ]
})
export class UserModule { }

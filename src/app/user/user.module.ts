import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { IndexComponent } from './components/index/index.component';
import { allIcons, NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    IndexComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    NgxBootstrapIconsModule.pick(allIcons)
  ]
})
export class UserModule { }

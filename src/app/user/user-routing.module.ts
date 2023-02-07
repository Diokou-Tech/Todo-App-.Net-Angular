import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
    path: "", component : IndexComponent,
    children: [
      {
        path: "", component : LoginComponent, title : "Todo App - Login"
      },
      {
        path: "register", component : RegisterComponent, title : "todo App - Register"
      },
      {
        path : "**", redirectTo : "",  pathMatch : "full", title : "Todo App - Login"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

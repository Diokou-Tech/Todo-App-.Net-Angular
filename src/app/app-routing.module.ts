import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path : "", redirectTo : "/user", pathMatch : "full"
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'todo',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  {
    path : "**", redirectTo : "/",  pathMatch : "full"
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path : "", redirectTo : "/auth", pathMatch : "full"
  },
  {
    path: 'auth',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'todo',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  {
    path : "**", redirectTo : "auth",  pathMatch : "full"
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

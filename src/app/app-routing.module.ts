import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path : "", redirectTo : "/auth", pathMatch : "full"
  },
  {
    path: 'auth',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'app',
    loadChildren: () => import('./todo/todo.module').then((m) => m.TodoModule),
    // canActivate : [false]
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

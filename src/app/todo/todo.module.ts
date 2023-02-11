import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { IndexComponent } from './components/index/index.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { SharedModule } from '../shared/shared.module';
import { EditTodoComponent } from './components/edit-todo/edit-todo.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { IdentityComponent } from './components/identity/identity.component';
import { PreferencesComponent } from './components/preferences/preferences.component';
import { ProjetComponent } from './components/projet/projet.component';


@NgModule({
  declarations: [
    IndexComponent,
    AddTodoComponent,
    EditTodoComponent,
    DashboardComponent,
    IdentityComponent,
    PreferencesComponent,
    ProjetComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    SharedModule
  ]
})
export class TodoModule { }

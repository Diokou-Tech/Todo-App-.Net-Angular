import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { IndexComponent } from './components/index/index.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';


@NgModule({
  declarations: [
    IndexComponent,
    AddTodoComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule
  ]
})
export class TodoModule { }

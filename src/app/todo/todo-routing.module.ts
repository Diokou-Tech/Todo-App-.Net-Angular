import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditTodoComponent } from './components/edit-todo/edit-todo.component';
import { IndexComponent } from './components/index/index.component';

const routes: Routes = [
  {
    path: "", component: IndexComponent,
    children: [
    { path: "", component: IndexComponent },
    { path: "add-todo", component: IndexComponent },
    { path: "edit-todo", component: EditTodoComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }

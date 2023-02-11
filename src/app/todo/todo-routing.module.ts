import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditTodoComponent } from './components/edit-todo/edit-todo.component';
import { IndexComponent } from './components/index/index.component';

const routes: Routes = [
  {
    path: "", component: IndexComponent,
    children: [
    { path: "", component: IndexComponent, title: "Todo App" },
    { path: "add-todo", component: IndexComponent, title: "Todo App - Add Todo" },
    { path: "edit-todo", component: EditTodoComponent, title: "Todo App - edit Todo"  },
    { path: "**", redirectTo : "", pathMatch : "full" }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }

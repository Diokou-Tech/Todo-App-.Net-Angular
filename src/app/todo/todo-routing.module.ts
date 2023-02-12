import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditTodoComponent } from './components/edit-todo/edit-todo.component';
import { IdentityComponent } from './components/identity/identity.component';
import { IndexComponent } from './components/index/index.component';
import { PreferencesComponent } from './components/preferences/preferences.component';
import { ProjetComponent } from './components/projet/projet.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

const routes: Routes = [
  {
    path: "", component: IndexComponent,
    children: [
    { path: "", component: DashboardComponent, title: "Todo App" },
    { path: "dashboard", component: DashboardComponent, title: "Todo App - Dashboard" },
    { path: "todo-list", component: TodoListComponent, title: "Todo App - Todo List" },
    { path: "add-todo", component: AddTodoComponent, title: "Todo App - Add Todo" },
    { path: "edit-todo/:id", component: EditTodoComponent, title: "Todo App - edit Todo"  },
    { path: "identity", component: IdentityComponent , title: "Todo App - Identity"  },
    { path: "projet", component: ProjetComponent , title: "Todo App - Projet"  },
    { path: "preference", component: PreferencesComponent , title: "Todo App - Preferences"  },
    { path: "**", redirectTo : "", pathMatch : "full" }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }

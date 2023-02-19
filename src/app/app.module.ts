import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment.development';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { TodoModule } from './todo/todo.module';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    TodoModule,
    SharedModule
  ],
  exports: [
    SharedModule
  ],
  providers: [
    { provide : LOCALE_ID, useValue : environment.LocaleIdDefault}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

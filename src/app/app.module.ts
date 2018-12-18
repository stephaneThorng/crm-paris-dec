import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, UiModule, NgbModule.forRoot(), AppRoutingModule, LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

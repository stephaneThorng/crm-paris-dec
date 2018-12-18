import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { UiComponent } from './user-interface/ui/ui.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, NavComponent, UiComponent],
  exports: [UiComponent],
  imports: [
    CommonModule, FontAwesomeModule, RouterModule
  ]
})
export class UiModule { }

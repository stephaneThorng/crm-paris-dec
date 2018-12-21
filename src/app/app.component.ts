import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PwaService } from './shared/services/pwa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  isPwaAvailable: boolean;

  constructor(private pwas: PwaService) {
    // this.isPwaAvailable = this.pwas.updates.isEnabled;
    console.log(this.isPwaAvailable);
  }


}

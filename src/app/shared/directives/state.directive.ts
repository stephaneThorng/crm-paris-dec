import { Directive, Input, OnInit, HostBinding, OnChanges } from '@angular/core';
import { State } from '../enums/state.enum';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {

  @Input() appState: State;

  @HostBinding('class') nomClass: string;

  constructor() { }

  ngOnChanges(): void {
    console.log(this.appState);
    this.nomClass = this.formatClass(this.appState);
  }

  // 'Option' ==> 'state-option'
  // 'Annulé' ==> 'state-annule'
  // 'Confirmé' => 'state-confirmé'
  // 'Facture payée' => 'state-facturepayee'
  private formatClass(state: State): string {
    return `state-${state.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()}`;
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { State } from 'src/app/shared/enums/state.enum';
import { PrestationService } from '../../services/prestation.service';

@Component({
  selector: 'app-item-prestation',
  templateUrl: './item-prestation.component.html',
  styleUrls: ['./item-prestation.component.scss']
})
export class ItemPrestationComponent implements OnInit {

  public states = State;

  @Input()
  public item: Prestation;

  constructor(private ps: PrestationService) { }

  ngOnInit() {
  }

  public changeState(event) {
    const state = event.target.value;
    this.ps.update(this.item, state);
    console.log(state);
  }
}

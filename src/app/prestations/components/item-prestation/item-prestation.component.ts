import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { State } from 'src/app/shared/enums/state.enum';
import { PrestationService } from '../../services/prestation.service';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item-prestation',
  templateUrl: './item-prestation.component.html',
  styleUrls: ['./item-prestation.component.scss']
})
export class ItemPrestationComponent implements OnInit {

  public states = State;

  public faTrashAlt = faTrashAlt;

  @Input()
  public item: Prestation;

  constructor(private ps: PrestationService) { }

  ngOnInit() {
  }

  public changeState(event) {
    const state = event.target.value;
    this.ps.update(this.item, state).then( () => {
      // traiter reponse
    });
    // Via requete Http
    // this.ps.update(this.item, state).subscribe( (data) => {
    //   // traiter reponse
    // });
    console.log(state);
  }

  public delete() {
    this.ps.delete(this.item).then( ()  => {
      // this.router.navigate(['../'], {relativeTo: this.route});
    });
    // this.ps.delete(this.item).subscribe( (data)  => {
    //   // this.router.navigate(['../'], {relativeTo: this.route});
    // });
  }

  public detail() {
    this.ps.presta$.next(this.item);
    console.log(this.ps.presta$.value);
  }
}

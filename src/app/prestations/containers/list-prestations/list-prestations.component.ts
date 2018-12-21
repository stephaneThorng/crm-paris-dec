import { Component, OnInit, OnDestroy } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { PrestationService } from '../../services/prestation.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-list-prestations',
  templateUrl: './list-prestations.component.html',
  styleUrls: ['./list-prestations.component.scss']
})
export class ListPrestationsComponent implements OnInit {

  public collection$: Observable<Prestation[]>;

  public headers: string[] = [ 'Type', 'Client', 'Nb Jour', 'Tjm Ht', 'Total Ht', 'Total Ttc', 'State', 'Supprimer'];

  constructor(private ps: PrestationService) {

  }

  ngOnInit() {
    this.collection$ = this.ps.collection$;
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { Client } from 'src/app/shared/models/client';
import { ClientService } from 'src/app/prestations/services/client.service';

@Component({
  selector: 'app-item-client',
  templateUrl: './item-client.component.html',
  styleUrls: ['./item-client.component.scss']
})
export class ItemClientComponent implements OnInit {

  public states = StateClient;

  @Input()
  public item: Client;

  constructor(private ps: ClientService) { }

  ngOnInit() {
  }

  public changeState(event) {
    const state = event.target.value;
    this.ps.update(this.item, state);
    console.log(state);
  }
}

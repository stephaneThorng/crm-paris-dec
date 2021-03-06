import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageClientsComponent } from './pages/page-clients/page-clients.component';
import { ClientsRoutingModule } from './clients-routing.module';
import { ListClientsComponent } from './containers/list-clients/list-clients.component';
import { SharedModule } from '../shared/shared.module';
import { ItemClientComponent } from './components/item-client/item-client.component';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';
import { AddClientComponent } from './containers/add-client/add-client.component';

@NgModule({
  declarations: [PageClientsComponent, ListClientsComponent, ItemClientComponent, PageAddClientComponent, AddClientComponent],
  imports: [
    CommonModule, ClientsRoutingModule, SharedModule
  ]
})
export class ClientsModule { }

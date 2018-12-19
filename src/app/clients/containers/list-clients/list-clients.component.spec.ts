import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListClientsComponent } from './list-clients.component';
import { PageClientsComponent } from '../../pages/page-clients/page-clients.component';
import { ItemClientComponent } from '../../components/item-client/item-client.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ClientsRoutingModule } from '../../clients-routing.module';
import { CommonModule } from '@angular/common';
import { ClientService } from 'src/app/prestations/services/client.service';

describe('ListClientsComponent', () => {
  let component: ListClientsComponent;
  let fixture: ComponentFixture<ListClientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PageClientsComponent, ListClientsComponent, ItemClientComponent],
      imports: [
        CommonModule, ClientsRoutingModule, SharedModule
      ],
      providers: [ClientService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

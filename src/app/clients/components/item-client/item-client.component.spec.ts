import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemClientComponent } from './item-client.component';
import { CommonModule } from '@angular/common';
import { ClientsRoutingModule } from '../../clients-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListClientsComponent } from '../../containers/list-clients/list-clients.component';
import { PageClientsComponent } from '../../pages/page-clients/page-clients.component';
import { ClientService } from 'src/app/prestations/services/client.service';


describe('ItemClientComponent', () => {
  let component: ItemClientComponent;
  let fixture: ComponentFixture<ItemClientComponent>;

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
    fixture = TestBed.createComponent(ItemClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

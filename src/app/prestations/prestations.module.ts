import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FormPrestationComponent } from './components/form-prestation/form-prestation.component';
import { ItemPrestationComponent } from './components/item-prestation/item-prestation.component';
import { AddPrestationComponent } from './containers/add-prestation/add-prestation.component';
import { ListPrestationsComponent } from './containers/list-prestations/list-prestations.component';
import { PageAddPrestationComponent } from './pages/page-add-prestation/page-add-prestation.component';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';
import { PrestationsRoutingModule } from './prestations-routing.module';
import { DetailPrestationComponent } from './components/detail-prestation/detail-prestation.component';
import { CommentPrestationComponent } from './components/comment-prestation/comment-prestation.component';

@NgModule({
  declarations: [PagePrestationsComponent, ListPrestationsComponent,
    ItemPrestationComponent, PageAddPrestationComponent,
    AddPrestationComponent,
    FormPrestationComponent,
    DetailPrestationComponent,
    CommentPrestationComponent],
  imports: [
    CommonModule, PrestationsRoutingModule, SharedModule
  ]
})
export class PrestationsModule { }

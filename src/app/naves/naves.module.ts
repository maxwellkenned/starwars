import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { NavesComponent } from './naves.component';
import { SharedModule } from '../shared/shared.module';
import { NavesDetalheComponent } from './naves-detalhe/naves-detalhe.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule
  ],
  declarations: [
    NavesComponent,
    NavesDetalheComponent
  ]
})
export class NavesModule { }

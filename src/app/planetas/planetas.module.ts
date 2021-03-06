import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PlanetasComponent } from './planetas.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { PlanetaDetalheComponent } from './planeta-detalhe/planeta-detalhe.component';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    SharedModule
  ],
  declarations: [
    PlanetasComponent,
    PlanetaDetalheComponent
  ]
})
export class PlanetasModule { }

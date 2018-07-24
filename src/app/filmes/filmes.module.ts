import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FilmesComponent } from './filmes.component';
import { SharedModule } from '../shared/shared.module';
import { FilmeDetalheComponent } from './filme-detalhe/filme-detalhe.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule
  ],
  declarations: [
    FilmesComponent,
    FilmeDetalheComponent
  ],
  exports: [
    FilmesComponent
  ]
})
export class FilmesModule { }

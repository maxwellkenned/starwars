import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmesComponent } from './filmes.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule
  ],
  declarations: [
    FilmesComponent
  ],
  exports: [
    FilmesComponent
  ]
})
export class FilmesModule { }

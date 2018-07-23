import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { EspeciesComponent } from './especies.component';
import { SharedModule } from '../shared/shared.module';
import { EspecieDetalheComponent } from './especie-detalhe/especie-detalhe.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule
  ],
  declarations: [
    EspeciesComponent,
    EspecieDetalheComponent
  ]
})
export class EspeciesModule { }

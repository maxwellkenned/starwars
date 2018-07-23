import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VeiculosComponent } from './veiculos.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { VeiculoDetalheComponent } from './veiculo-detalhe/veiculo-detalhe.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule
  ],
  declarations: [
    VeiculosComponent,
    VeiculoDetalheComponent
  ]
})
export class VeiculosModule { }

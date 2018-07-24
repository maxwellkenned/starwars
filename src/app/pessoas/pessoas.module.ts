import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PessoasComponent } from './pessoas.component';
import { SharedModule } from '../shared/shared.module';
import { PessoaDetalheComponent } from './pessoa-detalhe/pessoa-detalhe.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule
  ],
  declarations: [
    PessoasComponent,
    PessoaDetalheComponent
  ]
})
export class PessoasModule { }

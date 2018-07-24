import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilmesComponent } from './filmes/filmes.component';
import { PessoasComponent } from './pessoas/pessoas.component';
import { PlanetasComponent } from './planetas/planetas.component';
import { EspeciesComponent } from './especies/especies.component';
import { NavesComponent } from './naves/naves.component';
import { HomeComponent } from './home/home.component';
import { VeiculosComponent } from './veiculos/veiculos.component';
import { VeiculoDetalheComponent } from './veiculos/veiculo-detalhe/veiculo-detalhe.component';
import { NavesDetalheComponent } from './naves/naves-detalhe/naves-detalhe.component';
import { EspecieDetalheComponent } from './especies/especie-detalhe/especie-detalhe.component';
import { PlanetaDetalheComponent } from './planetas/planeta-detalhe/planeta-detalhe.component';
import { PessoaDetalheComponent } from './pessoas/pessoa-detalhe/pessoa-detalhe.component';
import { FilmeDetalheComponent } from './filmes/filme-detalhe/filme-detalhe.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'filmes', component: FilmesComponent},
  {path: 'filmes/detalhe/:id', component: FilmeDetalheComponent},
  {path: 'personagens', component: PessoasComponent},
  {path: 'personagens/detalhe/:id', component: PessoaDetalheComponent},
  {path: 'planetas', component: PlanetasComponent},
  {path: 'planetas/detalhe/:id', component: PlanetaDetalheComponent},
  {path: 'especies', component: EspeciesComponent},
  {path: 'especies/detalhe/:id', component: EspecieDetalheComponent},
  {path: 'naves', component: NavesComponent},
  {path: 'naves/detalhe/:id', component: NavesDetalheComponent},
  {path: 'veiculos', component: VeiculosComponent},
  {path: 'veiculos/detalhe/:id', component: VeiculoDetalheComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

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

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'filmes', component: FilmesComponent},
  {path: 'pessoas', component: PessoasComponent},
  {path: 'planetas', component: PlanetasComponent},
  {path: 'especies', component: EspeciesComponent},
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

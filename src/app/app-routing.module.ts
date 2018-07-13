import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavbarComponent } from './layout/navbar/navbar.component';
import { FilmesComponent } from './filmes/filmes.component';

const routes: Routes = [
  {path: 'filmes', component: FilmesComponent},
  {path: 'pessoas', component: NavbarComponent},
  {path: 'planetas', component: NavbarComponent},
  {path: 'especies', component: NavbarComponent},
  {path: 'naves', component: NavbarComponent},
  {path: 'veiculos', component: NavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

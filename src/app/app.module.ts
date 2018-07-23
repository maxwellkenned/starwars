import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarModule } from './layout/navbar/navbar.module';
import { FilmesModule } from './filmes/filmes.module';
import { PessoasModule } from './pessoas/pessoas.module';
import { PlanetasModule } from './planetas/planetas.module';
import { EspeciesModule } from './especies/especies.module';
import { NavesModule } from './naves/naves.module';
import { HomeComponent } from './home/home.component';
import { VeiculosModule } from './veiculos/veiculos.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    NavbarModule,
    FilmesModule,
    PessoasModule,
    PlanetasModule,
    EspeciesModule,
    NavesModule,
    VeiculosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

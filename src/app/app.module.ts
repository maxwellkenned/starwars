import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { NavbarModule } from './layout/navbar/navbar.module';
import { FilmesComponent } from './filmes/filmes.component';
import { FilmesModule } from './filmes/filmes.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    FilmesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';

import { FilmesService } from './filmes.service';
import { Filme } from '../shared/interface/filmes.interface';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent implements OnInit {

  public filmes: Filme[];

  constructor(private filmesService: FilmesService) { }

  ngOnInit() {
    this.getFilmes();
  }

  public getFilmes() {
    this.filmesService.getFilmes().subscribe((response) => {
      this.filmes = response['results']; console.log(this.filmes);
    });
  }

}

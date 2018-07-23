import { Component, OnInit } from '@angular/core';

import { FilmesService } from './filmes.service';
import { Filme } from '../shared/interface/filmes.interface';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html'
})
export class FilmesComponent implements OnInit {

  public filmes: Filme[];
  public next: string | '';
  public previous: string | '';
  public page = 1;

  constructor(private filmesService: FilmesService) { }

  ngOnInit() {
    this.getFilmes();
  }

  public getFilmes(url: string = '') {
    this.filmesService.getFilmes(url).subscribe((response) => {
      this.filmes = response['results'];
      this.next = response['next'];
      this.previous = response['previous'];
    });
  }

  public attPage(res: string) {
    this.getFilmes(res['url']);
    this.page = Number(res['page']);
  }

}

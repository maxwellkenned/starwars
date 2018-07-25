import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NamesService } from '../../shared/service/names.service';
import { FilmesService } from '../filmes.service';
import { Filme } from '../../shared/interface/filmes.interface';

@Component({
  selector: 'app-filme-detalhe',
  templateUrl: './filme-detalhe.component.html'
})
export class FilmeDetalheComponent implements OnInit {

  public filme: Filme;
  public id: number;

  constructor(private route: ActivatedRoute, private filmesService: FilmesService, private namesService: NamesService) {
    this.id = this.route.params['value'].id;
  }

  ngOnInit() {
    this.getDetalhe();
  }

  public getDetalhe() {
    this.filmesService.getFilmeDetalhe(this.id).subscribe((response) => {
      this.filme = response;
      this.getName('species');
      this.getName('starships');
      this.getName('vehicles');
      this.getName('characters');
      this.getName('planets');
    });
  }

  public getName(param: string) {
    // tslint:disable-next-line:forin
    for (const i in this.filme[`${param}`]) {
      this.namesService.getName(this.filme[`${param}`][i]).subscribe((res) => {
        this.filme[`${param}`][i] = res.name || res['title'];
      });
    }
  }

}

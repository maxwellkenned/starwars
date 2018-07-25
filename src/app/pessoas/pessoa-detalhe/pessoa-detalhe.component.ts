import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../../shared/interface/pessoas.interface';
import { ActivatedRoute } from '@angular/router';
import { PessoasService } from '../pessoas.service';
import { NamesService } from '../../shared/service/names.service';
import { isArray } from 'util';

@Component({
  selector: 'app-pessoa-detalhe',
  templateUrl: './pessoa-detalhe.component.html'
})
export class PessoaDetalheComponent implements OnInit {

  public pessoa: Pessoa;
  public id: number;

  constructor(private route: ActivatedRoute, private pessoasService: PessoasService, private namesService: NamesService) {
    this.id = this.route.params['value'].id;
  }

  ngOnInit() {
    this.getDetalhe();
  }

  public getDetalhe() {
    this.pessoasService.getPessoaDetalhe(this.id).subscribe((response) => {
      this.pessoa = response;
      this.getName('homeworld');
      this.getName('films');
      this.getName('species');
      this.getName('starships');
      this.getName('vehicles');
    });
  }

  public getName(param: string) {
    if (!isArray(this.pessoa[`${param}`])) {
      this.namesService.getName(this.pessoa[`${param}`]).subscribe((res) => {
        this.pessoa[`${param}`] = res.name || res['title'];
      });
      return false;
    }
    // tslint:disable-next-line:forin
    for (const i in this.pessoa[`${param}`]) {
      this.namesService.getName(this.pessoa[`${param}`][i]).subscribe((res) => {
        this.pessoa[`${param}`][i] = res.name || res['title'];
      });
    }
  }

}

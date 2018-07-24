import { Component, OnInit } from '@angular/core';
import { Especie } from '../../shared/interface/especies.interface';
import { ActivatedRoute } from '@angular/router';
import { EspeciesService } from '../especies.service';
import { NamesService } from '../../shared/service/names.service';
import { isArray } from 'util';

@Component({
  selector: 'app-especie-detalhe',
  templateUrl: './especie-detalhe.component.html'
})
export class EspecieDetalheComponent implements OnInit {

  public especie: Especie;
  public id: number;

  constructor(private route: ActivatedRoute, private especiesService: EspeciesService, private namesService: NamesService) {
    this.id = this.route.params['value'].id;
  }

  ngOnInit() {
    this.getDetalhe();
  }

  public getDetalhe() {
    this.especiesService.getEspecieDetalhe(this.id).subscribe((response) => {
      this.especie = response;
      this.getName('homeworld');
      this.getName('films');
      this.getName('people');
    });
  }

  public getName(param: string) {
    if (!isArray(this.especie[`${param}`])) {
      this.namesService.getName(this.especie[`${param}`]).subscribe((res) => {
        this.especie[`${param}`] = res.name || res['title'];
      });
      return false;
    }
    // tslint:disable-next-line:forin
    for (const i in this.especie[`${param}`]) {
      this.namesService.getName(this.especie[`${param}`][i]).subscribe((res) => {
        this.especie[`${param}`][i] = res.name || res['title'];
      });
    }
  }

}

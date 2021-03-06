import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { VeiculosService } from '../veiculos.service';
import { Veiculo } from '../../shared/interface/veiculos.interface';
import { NamesService } from '../../shared/service/names.service';

@Component({
  selector: 'app-veiculo-detalhe',
  templateUrl: './veiculo-detalhe.component.html'
})
export class VeiculoDetalheComponent implements OnInit {

  public veiculo: Veiculo;
  public id: number;

  constructor(private route: ActivatedRoute, private veiculosService: VeiculosService, private namesService: NamesService) {
    this.id = this.route.params['value'].id;
  }

  ngOnInit() {
    this.getDetalhe();
  }

  public getDetalhe() {
    this.veiculosService.getVeiculoDetalhe(this.id).subscribe((response) => {
      this.veiculo = response;
      this.getName('films');
      this.getName('pilots');
    });
  }

  public getName(param: string) {
    // tslint:disable-next-line:forin
    for (const i in this.veiculo[`${param}`]) {
      this.namesService.getName(this.veiculo[`${param}`][i]).subscribe((res) => {
        this.veiculo[`${param}`][i] = res['title'] || res['name'];
      });
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Veiculo } from '../shared/interface/veiculos.interface';
import { VeiculosService } from './veiculos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html'
})
export class VeiculosComponent implements OnInit {

  public veiculos: Veiculo[];
  public next: string | '';
  public previous: string | '';
  public page = 1;

  constructor(private veiculosService: VeiculosService, private router: Router) { }

  ngOnInit() {
    this.getVeiculos();
  }

  public getVeiculos(url = '') {
    this.veiculosService.getVeiculos(url).subscribe((response) => {
      this.veiculos = response['results'];
      this.next = response['next'];
      this.previous = response['previous'];
    });
  }

  public attPage(res: string) {
    this.getVeiculos(res['url']);
    this.page = Number(res['page']);
  }
}

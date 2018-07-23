import { Component, OnInit, AfterContentInit } from '@angular/core';
import { Especie } from '../../shared/interface/especies.interface';
import { ActivatedRoute } from '@angular/router';
import { EspeciesService } from '../especies.service';
import { NamesService } from '../../shared/service/names.service';

@Component({
  selector: 'app-especie-detalhe',
  templateUrl: './especie-detalhe.component.html'
})
export class EspecieDetalheComponent implements OnInit, AfterContentInit {

  public especie: Especie;
  public id: number;
  public loading = true;

  constructor(private route: ActivatedRoute, private especiesService: EspeciesService, private namesService: NamesService) {
    this.id = this.route.params['value'].id;
  }

  ngOnInit() {
    this.getDetalhe();
  }

  ngAfterContentInit() {
    this.loading = false;
  }

  public getDetalhe() {
    this.especiesService.getEspecieDetalhe(this.id).subscribe((response) => {
      this.especie = response;
      this.getName('films');
      this.getName('people');
    });
  }

  public getName(param: string) {
    console.log(param);
    // tslint:disable-next-line:forin
    for (const i in this.especie[`${param}`]) {
      this.namesService.getName(this.especie[`${param}`][i]).subscribe((res) => {
        this.especie[`${param}`][i] = res['title'] || res['name'];
      });
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Planeta } from '../../shared/interface/planetas.interface';
import { PlanetasService } from '../planetas.service';
import { NamesService } from '../../shared/service/names.service';

@Component({
  selector: 'app-planeta-detalhe',
  templateUrl: './planeta-detalhe.component.html'
})
export class PlanetaDetalheComponent implements OnInit {

  public planeta: Planeta;
  public id: number;

  constructor(private route: ActivatedRoute, private planetasService: PlanetasService, private namesService: NamesService) {
    this.id = this.route.params['value'].id;
  }

  ngOnInit() {
    this.getDetalhe();
  }

  public getDetalhe() {
    this.planetasService.getPlanetaDetalhe(this.id).subscribe((response) => {
      this.planeta = response;
      this.getName('films');
      this.getName('residents');
    });
  }

  public getName(param: string) {
    // tslint:disable-next-line:forin
    for (const i in this.planeta[`${param}`]) {
      this.namesService.getName(this.planeta[`${param}`][i]).subscribe((res) => {
        this.planeta[`${param}`][i] = res['title'] || res['name'];
      });
    }
  }

}

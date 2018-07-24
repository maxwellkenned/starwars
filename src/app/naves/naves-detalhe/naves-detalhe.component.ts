import { Component, OnInit } from '@angular/core';
import { Nave } from '../../shared/interface/naves.interface';
import { ActivatedRoute } from '@angular/router';
import { NavesService } from '../naves.service';
import { NamesService } from '../../shared/service/names.service';

@Component({
  selector: 'app-naves-detalhe',
  templateUrl: './naves-detalhe.component.html'
})
export class NavesDetalheComponent implements OnInit {

  public nave: Nave;
  public id: number;

  constructor(private route: ActivatedRoute,
    private navesService: NavesService,
    private namesService: NamesService) {
      this.id = this.route.params['value'].id;
    }

  ngOnInit() {
    this.getDetalhe();
  }

  public getDetalhe() {
    this.navesService.getNaveDetalhe(this.id).subscribe((response) => {
      this.nave = response;
      this.getName('films');
      this.getName('pilots');
    });
  }

  public getName(param: string) {
    // tslint:disable-next-line:forin
    for (const i in this.nave[`${param}`]) {
      this.namesService.getName(this.nave[`${param}`][i]).subscribe((res) => {
        this.nave[`${param}`][i] = res['title'] || res['name'];
      });
    }
  }

}

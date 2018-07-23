import { Component, OnInit } from '@angular/core';

import { PlanetasService } from './planetas.service';
import { Planeta } from '../shared/interface/planetas.interface';

@Component({
  selector: 'app-planetas',
  templateUrl: './planetas.component.html'
})
export class PlanetasComponent implements OnInit {

  public planetas: Planeta[];
  public next: string | '';
  public previous: string | '';
  public page = 1;

  constructor( private planetasService: PlanetasService) { }

  ngOnInit() {
    this.getPlanetas();
  }

  public getPlanetas(url = '') {
    this.planetasService.getPlanetas(url).subscribe((response) => {
      this.planetas = response['results'];
      this.next = response['next'];
      this.previous = response['previous'];
    });
  }

  public attPage(res: string) {
    this.getPlanetas(res['url']);
    this.page = Number(res['page']);
  }

}

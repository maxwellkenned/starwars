import { Component, OnInit } from '@angular/core';
import { EspeciesService } from './especies.service';
import { Especie } from '../shared/interface/especies.interface';

@Component({
  selector: 'app-especies',
  templateUrl: './especies.component.html'
})
export class EspeciesComponent implements OnInit {

  public especies: Especie[];
  public next: string | '';
  public previous: string | '';
  public page = 1;

  constructor(private especiesService: EspeciesService) { }

  ngOnInit() {
    this.getEspecies();
  }

  public getEspecies(url: string = '') {
    this.especiesService.getEspecies(url).subscribe((response) => {
      this.especies = response['results'];
      this.next = response['next'];
      this.previous = response['previous'];
    });
  }

  public attPage(res: string) {
    this.getEspecies(res['url']);
    this.page = Number(res['page']);
  }

}

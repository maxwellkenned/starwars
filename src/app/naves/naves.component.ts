import { Component, OnInit } from '@angular/core';
import { Nave } from '../shared/interface/naves.interface';
import { NavesService } from './naves.service';

@Component({
  selector: 'app-naves',
  templateUrl: './naves.component.html'
})
export class NavesComponent implements OnInit {

  public naves: Nave[];
  public next: string | '';
  public previous: string | '';
  public page = 1;

  constructor(private navesService: NavesService) { }

  ngOnInit() {
    this.getNaves();
  }

  public getNaves(url: string = '') {
    this.navesService.getNaves(url).subscribe((response) => {
      this.naves = response['results'];
      this.next = response['next'];
      this.previous = response['previous'];
    });
  }

  public attPage(res: string) {
    this.getNaves(res['url']);
    this.page = Number(res['page']);
  }

}

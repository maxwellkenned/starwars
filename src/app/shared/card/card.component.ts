import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, OnChanges {

  @Input() titlePage: string;
  @Input() dataArray: any[];
  @Input() previous: string;
  @Input() next: string;
  @Input() page: number;
  @Input() detalheUrl: string;

  @Output() pagenation = new EventEmitter();

  loading;

  constructor (private router: Router) {
  }

  ngOnInit() {
    this.loading = true;
  }

  ngOnChanges(changes: SimpleChanges) {
    // tslint:disable-next-line:forin
    for (const propName in changes) {
      if (propName === 'dataArray') {
          this.loading = false;
      }
    }
 }

  public nextPage(url: string) {
    this.loading = true;
    this.page += 1;
    this.pagenation.emit({'url': url, 'page': this.page});
  }

  public prevPage(url: string) {
    this.loading = true;
    this.page -= 1;
    this.pagenation.emit({'url': url, 'page': this.page});
  }

  public getDetalhe(url: string) {
    const baseUrl = this.detalheUrl += '/detalhe/';
    // tslint:disable-next-line:radix
    const id = Number(url.match(/\d+/g));
    this.router.navigate([baseUrl, id]);
    console.log('baseUrl', baseUrl);
    console.log('ID', id);
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Filme } from '../interface/filmes.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() title: string;
  @Input() url: string;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../shared/interface/pessoas.interface';
import { PessoasService } from './pessoas.service';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html'
})
export class PessoasComponent implements OnInit {

  public pessoas: Pessoa[];
  public next: string | '';
  public previous: string | '';
  public page = 1;

  constructor(private pessoasService: PessoasService) { }

  ngOnInit() {
    this.getPessoas();
  }

  public getPessoas(url = '') {
    this.pessoasService.getPessoas(url).subscribe((response) => {
      this.pessoas = response['results'];
      this.next = response['next'];
      this.previous = response['previous'];
    });
  }

  public attPage(res: string) {
    this.getPessoas(res['url']);
    this.page = Number(res['page']);
  }

}

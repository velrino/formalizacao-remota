import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private _router: Router) { }

  data = {
    nome: 'Lorem Ipsum da Silva',
    atual: {
      limite: 2000,
      anuidade: 0,
    },
    novo: {
      limite: 2000,
      anuidade: 1,
    }
  }

  enumAnuidade(anuidade: number) {
    const tiposAnuidade = [
      'isento',
      'não isento',
    ]
    return tiposAnuidade[anuidade];
  }

  goToEffectuation(contratacao: string) {
    const data = this.handleData(contratacao);
    this._router.navigate(['effectuation'], {
      state: { data }
    });
  }

  handleData(contratacao: string) {
    const { data } = this;
    return {
      nome: data.nome,
      limite: (contratacao == 'aceita') ? data.novo.limite : data.atual.limite,
      anuidade: (contratacao == 'aceita') ? data.novo.anuidade : data.atual.anuidade,
      contratacao,
    }
  }
}

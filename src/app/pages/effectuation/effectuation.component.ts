import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-effectuation',
  templateUrl: './effectuation.component.html',
  styleUrls: ['./effectuation.component.scss']
})
export class EffectuationComponent implements OnInit {
  data: any;

  constructor(private _router: Router) { }

  ngOnInit(): void {
    const { state } = history;
    if (!state.data) {
      this.goToHome();
    } else if (state.data) {
      this.data = state.data;
    }
  }

  enumAnuidade() {
    const tiposAnuidade = [
      'isento',
      'não isento',
    ]
    return tiposAnuidade[this.data.anuidade];
  }

  enumContratacao() {
    const tiposContratacao = {
      'aceita': 'Aceita',
      'recusar': 'Recusada',
    }
    return tiposContratacao[this.data.contratacao].toLowerCase();
  }

  goToHome() {
    this._router.navigate(['home']);
  }

  hasContratacaoIsAceita() {
    return this.data.contratacao == 'aceita';
  }
}

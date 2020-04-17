import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-effectuation',
  templateUrl: './effectuation.component.html',
  styleUrls: ['./effectuation.component.scss']
})
export class EffectuationComponent implements OnInit {
  data = {
    nome: 'Lorem Ipsum da Silva',
    limite: 2000,
    anuidade: 1,
    contratacao: 'aceita'
  }

  constructor() { }

  ngOnInit(): void {
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
}

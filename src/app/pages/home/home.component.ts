import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
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
}

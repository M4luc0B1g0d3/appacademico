import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appacad01',
  templateUrl: './appacad01.page.html',
  styleUrls: ['./appacad01.page.scss'],
})
export class Appacad01Page implements OnInit {

  componentes: Componente[] = [
    {
      icone: 'imagem',
      nome: 'Dados Pessoais',
      link: '/dadospessoais'
    },
    {
      icone:'imagem',
      nome: 'Financeiro',
      link: '/financeiro'
    },
    {
      icone:'imagem',
      nome: 'Notas',
      link: '/notas'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}

interface Componente{
  icone: string;
  nome: string;
  link: string;
}

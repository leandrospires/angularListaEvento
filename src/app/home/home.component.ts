import { Component, OnInit } from '@angular/core';
import {Eventos} from '../models/eventos'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listaDeEventos: Eventos[] = [
    //{"name":"Fazer Compras", "date": "3/1/2025", "time": "8am", "location": {"address": "Rua São Paulo", "city": "São Paulo", "country": "Brasil"}},
    {"name":"Fazer Compras", "date": new Date(), "time": "8am", "location": {"address": "Rua São Paulo", "city": "São Paulo", "country": "Brasil"}},
    {"name":"Correr", "date": new Date(), "time": "9am", "location": {"address": "Rua São Paulo", "city": "São Paulo", "country": "Brasil"}}
]

  constructor() { }

  ngOnInit(): void {
  }

adicionarEvento(evento: Eventos): void {
  this.listaDeEventos.push(evento);
}

removerEvento(posicao: number): void {
  this.listaDeEventos.splice(posicao, 1);
}

}

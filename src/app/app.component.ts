import { Component } from '@angular/core';
import { Eventos } from './models/eventos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  listaDeEventos: Eventos[] = [
      //{"name":"Fazer Compras", "date": "3/1/2025", "time": "8am", "location": {"address": "Rua São Paulo", "city": "São Paulo", "country": "Brasil"}},
      {"name":"Fazer Compras", "date": new Date(), "time": "8am", "location": {"address": "Rua São Paulo", "city": "São Paulo", "country": "Brasil"}},
      {"name":"Correr", "date": new Date(), "time": "9am", "location": {"address": "Rua São Paulo", "city": "São Paulo", "country": "Brasil"}}
  ]

  adicionarEvento(evento: Eventos): void {
    this.listaDeEventos.push(evento);
  }

  removerEvento(posicao: number): void {
    this.listaDeEventos.splice(posicao, 1);
  }

}

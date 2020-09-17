import { CurrencyPipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Eventos } from '../models/eventos';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  @Input() listaDeEventos: Array<Eventos>;
  @Output() adicionarEvento: EventEmitter<Eventos> = new EventEmitter<Eventos>();
  @Output() removerEvento: EventEmitter<number> = new EventEmitter<number>();

  //moedaPipe = new CurrencyPipe("pt-Br");

  constructor() { }

  ngOnInit(): void {
  }

  adicionandoEvento(): void {
    //console.log(this.moedaPipe.transform(2000));

    this.adicionarEvento.emit({"name":"Programando", "date": new Date(), "time": "11am", "location": {"address": "São Paulo", "city": "São Paulo", "country": "Brasil"}});
  }

  removendoEvento(posicao: number): void {
    this.removerEvento.emit(posicao);

  }

}

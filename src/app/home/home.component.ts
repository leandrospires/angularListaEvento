import { Component, OnInit } from '@angular/core';
import {Eventos} from '../models/eventos'
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listaDeEventos: Eventos[] = [];

  constructor(private listaService: MyServiceService) { 
  }

  ngOnInit(): void {
    this.listaDeEventos = this.listaService.listaDeEventos;
  }

  adicionarEvento(evento: Eventos): void {
    //this.listaDeEventos.push(evento);
    this.listaService.adicionarEvento(evento);
  }
  
  removerEvento(posicao: number): void {
    //this.listaDeEventos.splice(posicao, 1);
    this.listaService.removerEvento(posicao);
  }

}

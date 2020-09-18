import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AboutModule } from './about/about.module';
import { Eventos } from './models/eventos';
import { Usuario } from './models/usuario';

@Injectable({
  
  providedIn: 'root' // padrão: Global
  //providedIn: AboutModule // fica disponível em um módulo
})
export class MyServiceService {

  private _listaDeEventos = [
    {"name":"Fazer Compras", "date": new Date(), "time": "8am", "location": {"address": "Rua São Paulo", "city": "São Paulo", "country": "Brasil"}},
    {"name":"Correr", "date": new Date(), "time": "9am", "location": {"address": "Rua São Paulo", "city": "São Paulo", "country": "Brasil"}}
  ];

  public get listaDeEventos(): Array<Eventos> {
    return this._listaDeEventos;
  }

  constructor(private http: HttpClient) { }

  listarUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>('http://jsonplaceholder.typicode.com/users');
  }

  adicionarEvento(evento: Eventos): void {
    this.listaDeEventos.push(evento);
  }
  
  removerEvento(posicao: number): void {
    this.listaDeEventos.splice(posicao, 1);
  }

  savePost(userId: number, post: any): Observable<any> {
    return this.http.post(`https://jsonplaceholder.typicode.com/posts/${userId}/comments`, post);

  }

}

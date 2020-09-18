import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.scss']
})
export class ContatosComponent implements OnInit {

  contatos: Usuario[];

  constructor(private router: Router, private servico: MyServiceService) { }

  ngOnInit(): void {
    //usuarios=>this.contatos=usuarios
    this.servico.listarUsuarios().subscribe(usuarios=>this.contatos=usuarios);
  }

  voltarParaHome(): void {
    //this.router.navigateByUrl('/home');
    this.router.navigate(['home']); //utilizado para passar parâmetros extras
  }

}

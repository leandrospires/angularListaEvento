import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.scss']
})
export class ContatosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  voltarParaHome(): void {
    //this.router.navigateByUrl('/home');
    this.router.navigate(['home']); //utilizado para passar parâmetros extras
  }

}

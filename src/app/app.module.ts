import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponent } from './lista/lista.component';
import { EnderecoPipe } from './endereco.pipe';
import { HomeComponent } from './home/home.component';
import { ContatosComponent } from './contatos/contatos.component';
//import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    EnderecoPipe,
    HomeComponent,
    ContatosComponent
    //LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

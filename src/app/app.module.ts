import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponent } from './lista/lista.component';
import { EnderecoPipe } from './endereco.pipe';
import { HomeComponent } from './home/home.component';
import { ContatosComponent } from './contatos/contatos.component';
import { PostFormComponent } from './post-form/post-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ScrollingModule} from '@angular/cdk/scrolling';

//import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    EnderecoPipe,
    HomeComponent,
    ContatosComponent,
    PostFormComponent
    //LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

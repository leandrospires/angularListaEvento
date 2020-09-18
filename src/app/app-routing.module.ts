import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContatosComponent } from './contatos/contatos.component';
import { PostFormComponent } from './post-form/post-form.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch: 'full'},
  {path:'home', component:HomeComponent},
  {path:'contatos/:id', component:PostFormComponent},
  {path:'contatos', component:ContatosComponent},
  {path:'about', loadChildren: ()=>import('./about/about.module').then(m=>m.AboutModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

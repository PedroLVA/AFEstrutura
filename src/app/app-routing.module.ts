import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VerProdutosComponent } from './components/ver-produtos/ver-produtos.component';
import { AdicionarProdutosComponent } from './components/adicionar-produtos/adicionar-produtos.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
    {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'adicionar',
    component: AdicionarProdutosComponent
  },
  {
    path: 'ver-produtos',
    component: VerProdutosComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

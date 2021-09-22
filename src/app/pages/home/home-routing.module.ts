import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AhorcadoComponent } from './pages/ahorcado/ahorcado.component';
import { HomeComponent } from './pages/home/home.component';
import { MayoroMenorComponent } from './pages/mayoro-menor/mayoro-menor.component';
import { PreguntadosComponent } from './pages/preguntados/preguntados.component';
import { SopaDeLetrasComponent } from './pages/sopa-de-letras/sopa-de-letras.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', component: HomeComponent},
      {path: 'ahorcado', component: AhorcadoComponent},
      {path: 'mayoromenor', component: MayoroMenorComponent},
      {path: 'preguntados', component: PreguntadosComponent},
      {path: 'sopadeletras', component: SopaDeLetrasComponent},
      {path: '**', redirectTo: ''}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AhorcadoComponent } from './pages/ahorcado/ahorcado.component';
import { HomeComponent } from './pages/home/home.component';
import { MayoroMenorComponent } from './pages/mayoro-menor/mayoro-menor.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', component: HomeComponent},
      {path: 'ahorcado', component: AhorcadoComponent},
      {path: 'mayoromenor', component: MayoroMenorComponent},
      {path: '**', redirectTo: ''}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

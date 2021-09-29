import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { AhorcadoComponent } from './pages/ahorcado/ahorcado.component';
import { HomeComponent } from './pages/home/home.component';
import { ChatComponent } from './pages/chat/chat.component';
import { FormsModule } from '@angular/forms';
import { MayoroMenorComponent } from './pages/mayoro-menor/mayoro-menor.component';
import { PreguntadosComponent } from './pages/preguntados/preguntados.component';
import { SopaDeLetrasComponent } from './pages/sopa-de-letras/sopa-de-letras.component';
import { EstadisticasComponent } from './pages/estadisticas/estadisticas.component';


@NgModule({
  declarations: [
    AhorcadoComponent,
    HomeComponent,
    ChatComponent,
    MayoroMenorComponent,
    PreguntadosComponent,
    SopaDeLetrasComponent,
    EstadisticasComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ]
})
export class HomeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { AhorcadoComponent } from './pages/ahorcado/ahorcado.component';
import { HomeComponent } from './pages/home/home.component';
import { ChatComponent } from './pages/chat/chat.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AhorcadoComponent,
    HomeComponent,
    ChatComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ]
})
export class HomeModule { }

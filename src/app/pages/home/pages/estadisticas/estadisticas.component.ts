import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ResultadosService } from 'src/app/services/resultados/resultados.service';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {

  constructor(public resultados : ResultadosService) { 
    
   }

  ngOnInit(): void {
    
  }

  

  onSaveResults(){
  console.log(this.resultados.resultados)
  }

  onUpdateResults(){

  }
}

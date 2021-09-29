import { Component, OnInit } from '@angular/core';
import { ResultadosService } from 'src/app/services/resultados/resultados.service';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {

  constructor(private results: ResultadosService) { }

  ngOnInit(): void {
  }

  onSaveResults(){
    this.results.saveResults();
    this.results.getIdItem();
  }

  onUpdateResults(){
    this.results.updateItem();
  }
}

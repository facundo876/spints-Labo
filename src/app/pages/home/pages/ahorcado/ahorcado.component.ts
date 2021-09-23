import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent implements OnInit {

  arrayPalabras:string[] = ["PLANETA","SOL","MARTE","NEPTURNO","TIERRA","SISTEMA","GALAXIA"];
  palabraElegida:string[];
  palabraArmada:string[];
  cantidadLetrasCorectas:number = 0;

  vidas:number[] = [3,2,1];
  tecladoStatus:boolean = false;
  menuVolveraJugarDerrota:boolean = false;
  menuVolveraJugarVictoria:boolean = false;

  constructor() {
    this.palabraElegida = (this.arrayPalabras[Math.floor(Math.random() * this.arrayPalabras.length)]).split('');
    this.palabraArmada = this.palabraElegida.map<string>(m => m = "");
  }

  ngOnInit(): void {}

  abecedario(){
    return ["A","B","C","D","E","F",
    "G","H","I","J","K","L","M",
    "N","O","P","Q","R","S","T","U",
    "V","W","X","Y","Z"];
  }

  onButtonClick(event : MouseEvent){
    let value = (event.target as HTMLButtonElement).innerHTML;
    var indices = this.obtenerTodasLasAparicionesDeUnaLetra(value);

    if(indices.length > 0){
      indices.forEach(index => {
        
        this.palabraArmada[index] = value;
        this.cantidadLetrasCorectas++;
      });
    }
    else{
      this.vidas.pop();
    }
    //Derrota
    if(this.vidas.length == 0){
      this.tecladoStatus = true;
      this.menuVolveraJugarDerrota = true;
    }
    //Victoria
      if(JSON.stringify(this.palabraArmada) == JSON.stringify(this.palabraElegida)){
      this.tecladoStatus = true;
      this.menuVolveraJugarVictoria = true;
    }

    (event.target as HTMLButtonElement).disabled = true;
  }

  onVolveraJugar(){
    this.vidas = [3,2,1];
    this.menuVolveraJugarVictoria = false;
    this.menuVolveraJugarDerrota = false;
    this.palabraElegida = (this.arrayPalabras[Math.floor(Math.random() * this.arrayPalabras.length)]).split('');
    this.palabraArmada = this.palabraElegida.map<string>(m => m = "");
    this.tecladoStatus = false;
  }

  private obtenerTodasLasAparicionesDeUnaLetra(element:string):number[]{
    var indices = [];
    var idx = this.palabraElegida.indexOf(element);
    while (idx != -1) {
      indices.push(idx);
      idx = this.palabraElegida.indexOf(element, idx + 1);
    }
    return indices;
  }

}

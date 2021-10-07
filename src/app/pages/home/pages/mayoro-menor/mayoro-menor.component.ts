import { Component, OnInit } from '@angular/core';
import { ResultadosService } from 'src/app/services/resultados/resultados.service';
import firebase from 'firebase/app';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-mayoro-menor',
  templateUrl: './mayoro-menor.component.html',
  styleUrls: ['./mayoro-menor.component.css']
})
export class MayoroMenorComponent implements OnInit {

  readonly NUMEROMAX = 100;
  readonly NUMEROMIN = 0;
  cartaActual!:number;
  proximaCarta!:number;
  statusCarta:boolean = true;

  constructor(private resultado : ResultadosService,
              public authService: AuthService) {
    this.generarCartasRandom();
   }

  ngOnInit(): void {
  }

  onOtraCarta(){
    this.generarCartasRandom(this.proximaCarta);
    document.getElementById("numeroProximo")!.innerHTML = "";
    document.getElementById("reusltadoCartas")!.style.color = "black";
    document.getElementById("reusltadoCartas")!.innerHTML = "?";
    this.statusCarta = true;
  }

  onVerificarMenor(){
    if(this.cartaActual > this.proximaCarta){
      this.animacionResultado("CORRECTO");
    }
    else{
      this.animacionResultado("INCORRECTO");
    }
  }

  onVerificarMayor(){
    if(this.cartaActual < this.proximaCarta){
      this.animacionResultado("CORRECTO");
    }
    else{
      this.animacionResultado("INCORRECTO");
    }
  }

  private generarCartasRandom(_cartaActual?: number){

    this.cartaActual = _cartaActual? _cartaActual : Math.floor(Math.random() * (this.NUMEROMAX - this.NUMEROMIN)) + this.NUMEROMIN;
    this.proximaCarta = Math.floor(Math.random() * (this.NUMEROMAX - this.NUMEROMIN)) + this.NUMEROMIN;

    while(this.cartaActual == this.proximaCarta){
        this.proximaCarta = Math.floor(Math.random() * (this.NUMEROMAX - this.NUMEROMIN)) + this.NUMEROMIN;
    }
    
  }

  private  animacionResultado(resultado:string){
    var i = 0;
    document.getElementById("reusltadoCartas")!.innerHTML = "";
    var timer = setInterval(()=>{
        document.getElementById("reusltadoCartas")!.style.color = "black";
        document.getElementById("reusltadoCartas")!.innerHTML += "."
        
        if(i === 3){
          clearInterval(timer);
          document.getElementById("reusltadoCartas")!.innerHTML = resultado;

          if(resultado == "CORRECTO"){
            document.getElementById("reusltadoCartas")!.style.color = "green";
          }
          else{
            document.getElementById("reusltadoCartas")!.style.color = "red";
          }
          //Mostrar numero proximo
          document.getElementById("numeroProximo")!.innerHTML = ""+this.proximaCarta;
          this.statusCarta = false;
        }
        i++;
      }, 1000)
      this.guardarMensajes(resultado);
  }

  private guardarMensajes(value :string){

    var results = {};
    if(value == "CORRECTO")
    {
      results = {"mayoroMenor.wins" : firebase.firestore.FieldValue.increment(1),
                 "mayoroMenor.total" : firebase.firestore.FieldValue.increment(1)}
    }
    else
    {
      results = {"mayoroMenor.losses" : firebase.firestore.FieldValue.increment(1),
                 "mayoroMenor.total" : firebase.firestore.FieldValue.increment(1)}
    }

    this.resultado.save(results);
  }
}

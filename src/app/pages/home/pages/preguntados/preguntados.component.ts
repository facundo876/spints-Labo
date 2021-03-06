import { Component, OnInit } from '@angular/core';
import { IPokemon } from 'src/app/interface/pokemon.interface';
import { ApiPokemonService } from 'src/app/services/apiPokemon/api-pokemon.service';
import firebase from 'firebase/app';
import { ResultadosService } from 'src/app/services/resultados/resultados.service';

@Component({
  selector: 'app-preguntados',
  templateUrl: './preguntados.component.html',
  styleUrls: ['./preguntados.component.css']
})
export class PreguntadosComponent implements OnInit {
  
  readonly NUMEROMAX = 100;
  readonly NUMEROMIN = 0;
  srcImagen:string = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg";
  optionCorrect: any = {};
  arrayNamePokemones: string[] = ["w"];
  statusRespuestas:boolean = false;

  constructor(private apiPokemon: ApiPokemonService, private resultado : ResultadosService) {
      
   }

  ngOnInit(): void {

    this.setPokemones();
  }

  onNextQuestion(){
    this.setPokemones();
    this.statusRespuestas = false;
    document.getElementById("optionCorrect")!.innerHTML = "?";
    document.getElementById("reusltadoCartas")!.style.color = "black";
    document.getElementById("reusltadoCartas")!.innerHTML = "?";
  }

  onAnswer(event : MouseEvent){
    this.statusRespuestas = true;
    let value = (event.target as HTMLButtonElement).innerHTML;
    
    if(value == this.optionCorrect.name){
      this.animacionResultado("CORRECTO");
    }
    else{
      this.animacionResultado("INCORRECTO");
    }
  }

  private async setPokemones(){

    var rand = Math.floor(Math.random() * (this.NUMEROMAX - this.NUMEROMIN)) + this.NUMEROMIN;
    await this.apiPokemon.getPokemons(rand).subscribe(res => {
      console.log(res);
      this.optionCorrect.imagen = res.sprites.other.dream_world.front_default;
      this.optionCorrect.name = res.name;
      
      this.arrayNamePokemones.push(res.name);
    });
    
     this.arrayNamePokemones = await this.allPokemones();

  }

  private  allPokemones(){
    var array:any = [];
    for(var i=0; i<3; i++){
      let rand:number = Math.floor(Math.random() * (this.NUMEROMAX - this.NUMEROMIN)) + this.NUMEROMIN;
        this.apiPokemon.getPokemons(rand).subscribe(res => {
          array.push(res.name);
      });
    }
    console.log(array);
    return array;
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
          document.getElementById("optionCorrect")!.innerHTML = ""+this.optionCorrect.name;
          
        }
        i++;
      }, 1000)
      this.guardarMensajes(resultado)
  }

  private guardarMensajes(value :string){

    var results = {};
    if(value == "CORRECTO")
    {
      results = {"preguntados.wins" : firebase.firestore.FieldValue.increment(1),
                 "preguntados.total" : firebase.firestore.FieldValue.increment(1)}
    }
    else
    {
      results = {"preguntados.losses" : firebase.firestore.FieldValue.increment(1),
                 "preguntados.total" : firebase.firestore.FieldValue.increment(1)}
    }

    this.resultado.save(results);
  }
}

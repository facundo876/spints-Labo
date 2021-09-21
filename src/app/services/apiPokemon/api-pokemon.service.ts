import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPokemon } from 'src/app/interface/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiPokemonService {

  baseUrl:string = 'https://pokeapi.co/api/v2'
  public arrayPokemones : any[] = [];

  constructor(private http: HttpClient) { 
    
  }

  getPokemons(index:number){
    
    return this.http.get<any>(`${this.baseUrl}/pokemon/${index}`);
  }
  
  async getArrayPokemons(arrayIndex:number[]){
    
    var arrayRes:any[] = [];
    await arrayIndex.forEach(element => {
      
      this.http.get<any>(`${this.baseUrl}/pokemon/${element}`).subscribe(res => {
        arrayRes.push(res);
      })
      
    });
    return arrayRes;
  }
}

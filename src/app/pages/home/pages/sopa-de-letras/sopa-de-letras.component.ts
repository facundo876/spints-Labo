import { Component, OnInit } from '@angular/core';
import { elementAt } from 'rxjs/operators';
import { Sopa } from './claseSopa';

@Component({
  selector: 'app-sopa-de-letras',
  templateUrl: './sopa-de-letras.component.html',
  styleUrls: ['./sopa-de-letras.component.css']
})
export class SopaDeLetrasComponent implements OnInit {

  palabras:any[] = ['FACUNDO','WALTER'];
  arrayPositionWords : any[] = [];
  arrayLettersWords : any[] = [];
  arrayPoints:any[] = [];
  matrix : any = 
  [
  ['a', 'b', 'c','a', 'b', 'c','a', 'b', 'c','a'],
  ['a', 'b', 'c','a', 'b', 'c','a', 'b', 'c','a'],
  ['a', 'b', 'c','a', 'b', 'c','a', 'b', 'c','a'],
  ['a', 'b', 'c','a', 'b', 'c','a', 'b', 'c','a'],
  ['a', 'b', 'c','a', 'b', 'c','a', 'b', 'c','a'],
  ['a', 'b', 'c','a', 'b', 'c','a', 'b', 'c','a'],
  ['a', 'b', 'c','a', 'b', 'c','a', 'b', 'c','a'],
  ['a', 'b', 'c','a', 'b', 'c','a', 'b', 'c','a'],
  ['a', 'b', 'c','a', 'b', 'c','a', 'b', 'c','a'],
  ['a', 'b', 'c','a', 'b', 'c','a', 'b', 'c','a']];

  constructor() { }

  ngOnInit(): void {
    var sopa:Sopa = new Sopa(this.palabras);
    this.matrix = sopa.generar();
    this.arrayPoints = sopa.ArrayDepoints;
    console.log(sopa.ArrayDepoints);

  }

  onValueLetter(letter:string, value:any[], event : MouseEvent){

    this.classChangeBtn(event);
    

    this.arrayPositionWords.push(value);
    this.arrayLettersWords.push(letter);

    this.arrayPoints.forEach(element => {

      if(JSON.stringify(element) == JSON.stringify(this.arrayPositionWords)){
        this.colorChangeBtn(element);
        document.getElementById("txt" + this.arrayLettersWords.join(''))!.style.textDecoration += "line-through"
        this.arrayPositionWords = [];
        this.arrayLettersWords = [];
      }
    });
   
  }

  private colorChangeBtn(arrayPoints: any[]){

    arrayPoints.forEach(element => {
      console.log("btn" + element[0] + element[1])
      
      document.getElementById("btn" + element[0] + element[1])!.className = document.getElementById("btn" + element[0] + element[1])!.className.replace( /(?:^|\s)btn-secondary(?!\S)/g , ' btn-primary' );
      
    });
    
  }

  private classChangeBtn(event : MouseEvent){

    if ( (event.target as HTMLButtonElement).className.match(/(?:^|\s)btn-outline-secondary(?!\S)/) ){

      (event.target as HTMLButtonElement).className = (event.target as HTMLButtonElement).className.replace( /(?:^|\s)btn-outline-secondary(?!\S)/g , '' );
      (event.target as HTMLButtonElement).className += " btn-secondary";
    }
    else{
      
      (event.target as HTMLButtonElement).className = (event.target as HTMLButtonElement).className.replace( /(?:^|\s)btn-secondary(?!\S)/g , '' );
      (event.target as HTMLButtonElement).className += " btn-outline-secondary";
    }
  }
  
}

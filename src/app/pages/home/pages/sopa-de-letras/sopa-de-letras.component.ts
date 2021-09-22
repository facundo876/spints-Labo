import { Component, OnInit } from '@angular/core';
import { Sopa } from './claseSopa';

@Component({
  selector: 'app-sopa-de-letras',
  templateUrl: './sopa-de-letras.component.html',
  styleUrls: ['./sopa-de-letras.component.css']
})
export class SopaDeLetrasComponent implements OnInit {

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
    var sopa:Sopa = new Sopa();
    this.matrix = sopa.generar();
  }

  onValueLetter(value:any[]){
    console.log(value);
  }

}

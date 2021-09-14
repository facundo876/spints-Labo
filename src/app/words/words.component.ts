import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {

  matrix : any = [['a', 'b', 'c'],['d', 'e', 'f'],['g', 'h', 'i']];

  constructor() { }

  ngOnInit(): void {
  }

  SaveLetters(value: string){
      console.log(value);
  }
}

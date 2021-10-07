export interface IResultados{
  id?:string,
  data?:{
    ahorcados?: {wins?:any, losses:any, total?:any};
    preguntados?: {wins:number, losses:number, total:number};
    mayoroMenor?: {wins:number, losses:number, total:number};
    sopaDeLetras?: {wins:number, losses:number, total:number};
  }
}
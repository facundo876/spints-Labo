import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import firebase from 'firebase/app';
@Injectable({
  providedIn: 'root'
})
export class ResultadosService {

  private itemsCollection!: AngularFirestoreCollection<any>;

  constructor(private afs: AngularFirestore) { 
   this.itemsCollection = this.afs.collection<any>("resultados");
  }

  saveResults(){
    
    var item = {wins: 111, losses: 2}
    this.itemsCollection.doc(this.afs.createId()).set(item);
  }

  getIdItem(){
    
    this.itemsCollection.doc("facundo@gmail.com").get().subscribe((item:any)=>{
      console.log(item.data())
    } );
  }

  updateItem(){

    this.itemsCollection.doc("facundo@gmail.com").update({wins: firebase.firestore.FieldValue.increment(1)})
    .then(()=>{
      console.log("Atualizado")
    })
  }
}

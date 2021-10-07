import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import firebase from 'firebase/app';
import { IResultados } from 'src/app/interface/resultados.interface';
import { AuthService } from '../auth/auth.service';
@Injectable({
  providedIn: 'root'
})
export class ResultadosService {

  private itemsCollection!: AngularFirestoreCollection<any>;
  private existe: boolean = true;
  public resultados : any[] = [];

  constructor(private afs: AngularFirestore, public authService: AuthService) { 
   this.itemsCollection = this.afs.collection<IResultados>("resultados");

   this.itemsCollection.get().subscribe((querySnapshot) => {
      querySnapshot.forEach((doc) => {

          this.resultados.push({id: doc.id, data:doc.data()})
      });
    });

  }

  saveResults(results: IResultados, email:string)
  {
    this.itemsCollection.doc(email).set(results);
  }

  crateResults(email:string){
    this.itemsCollection.doc(email).set({});
  }

  getIdResults()
  {
    this.itemsCollection.doc("facundo@gmail.com").get()
      .subscribe((item:any)=>{
        console.log(item.data())
      });
  }


  updateResults(results: IResultados, email:string)
  {
    this.itemsCollection.doc(email).update(results);
  }

  save(results:any){
    var docRef = this.itemsCollection.doc(this.authService.userData.email);
    docRef.get().subscribe((doc)=>{
      if(!doc.exists){
        this.saveResults(results, this.authService.userData.email);
      }
      else{
        this.updateResults(results, this.authService.userData.email);
      }
    })
  }

}

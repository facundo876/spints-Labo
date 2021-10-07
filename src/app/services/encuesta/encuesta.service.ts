import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {

  private itemsCollection!: AngularFirestoreCollection<any>;

  constructor(private afs: AngularFirestore) { 
    this.itemsCollection = this.afs.collection("encuestas");
  }

  savePoll(results: any, email: any)
  {
    this.itemsCollection.doc(email).set(results);
  }

}

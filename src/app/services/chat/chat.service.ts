import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { IMessage } from 'src/app/interface/mensaje.interface';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private itemsCollection!: AngularFirestoreCollection<IMessage>;
  public chats : any[] = [];

  constructor(private afs: AngularFirestore,
              public authService: AuthService) { }

  loadMessage(){
    this.itemsCollection = this.afs.collection<IMessage>('chats', ref => 
                                                          ref.orderBy('fecha', 'desc').limit(25));  
    return this.itemsCollection.valueChanges().pipe(map((message : IMessage[]) => {
                                  console.log(message)
                                  this.chats = message.reverse();
                                  return this.chats;
                                }));
  }

  addMessage(text :string){
    let message : IMessage ={
      nombre : this.authService.userData.email,
      text: text,
      fecha: new Date().getTime(),
      uid: this.authService.userData.uid
    }

    return this.itemsCollection.add(message);
  }

}

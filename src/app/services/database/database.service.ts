import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  loginsUsers ?: AngularFireList<any>;
  loginsUsers_Angular ?: Observable<any>;

  constructor(private db : AngularFireDatabase) { 

    this.loginsUsers = this.db.list('loginsUsers');

    this.loginsUsers_Angular = this.loginsUsers.valueChanges();
  }

  SaveDataBase(value : any){
    this.loginsUsers!.push(
      {
        user: {email: value.email},
        dateOfAdmission: new Date().toLocaleString()
      })
  }

}

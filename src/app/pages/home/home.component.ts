import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  chats: Observable<any[]>;
  
  constructor(private authService : AuthService,
              private router: Router,
               firestore: AngularFirestore ) { 

                this.chats = firestore.collection('chats').valueChanges();
               }

  ngOnInit(): void {

  }



  public async onLogOut(){
    await this.authService.logout();
  }
}

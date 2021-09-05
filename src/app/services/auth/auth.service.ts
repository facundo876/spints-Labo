import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: any;

  constructor( private auth : AngularFireAuth,
               private router : Router) { 

    this.auth.authState.subscribe(user=>{
      console.log(user);
      if(user){
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      }
      else{
        localStorage.setItem('user', null!);
        JSON.parse(localStorage.getItem('user')!);
      }
    })
  }

   login(value:any){

    return this.auth.signInWithEmailAndPassword(value.email, value.password)
      .then(()=>{
        this.router.navigate(['home']);
      })
  }

  logout(){
    return this.auth.signOut()
      .then(()=>{
        localStorage.removeItem('user');
        this.router.navigate(['login']);
      })
  }

  register(value:any){
    return this.auth.createUserWithEmailAndPassword(value.email, value.password);
  }

  get isLoggedIn() : boolean{
    const user = JSON.parse(localStorage.getItem('user')!);
    return (user !== null) ? true : false;
  }

}
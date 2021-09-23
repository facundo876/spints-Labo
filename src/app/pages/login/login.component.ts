import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { DatabaseService } from 'src/app/services/database/database.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: boolean = false;
  divErrorMessage : string = "";
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private authService: AuthService,
              private router: Router
              ) { }

  ngOnInit(): void {
  }

  public async QuickAccessLogin(){
    var value = {email : "facundo@gmail.com", password: "123456"};

    (<HTMLInputElement>document.getElementById("floatingInput")).value = value.email;
    (<HTMLInputElement>document.getElementById("floatingPassword")).value = value.password;
    this.loginForm = new FormGroup({
      email: new FormControl(value.email),
      password: new FormControl(value.password)
    });
  }

  public async onLogin(){
    try{
      await this.authService.login(this.loginForm.value);

    }catch(e : any){
      
      this.setErrorMessage = e.message;
    }
  }

  set setErrorMessage(message:string){
    this.divErrorMessage = message;
    this.error = true;
  }
}

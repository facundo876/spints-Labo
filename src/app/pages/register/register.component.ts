import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ResultadosService } from 'src/app/services/resultados/resultados.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private authService: AuthService, private resultado : ResultadosService) { }

  ngOnInit(): void {
  }

  public async onRegister(){

    try{
      await this.authService.register(this.registerForm.value)
      .then(()=>{
        this.resultado.crateResults(this.registerForm.value.email)
        this.authService.login(this.registerForm.value);
      })

    }catch(e:any){
      alert(e.message);
      
    }
    
  }
}

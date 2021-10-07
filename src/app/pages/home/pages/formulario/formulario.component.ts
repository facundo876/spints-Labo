import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { EncuestaService } from 'src/app/services/encuesta/encuesta.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public checks: Array<any> = [
    {description: 'Autos', value: 'Autos'},
    {description: "Deportes", value: 'Deportes'},
    {description: "Videojuegos", value: 'Videojuegos'}
  ];

  formulario: FormGroup;
  states = ["Avellaneda", "Quilmes", "Florencio Varela"];
  constructor(private fb : FormBuilder, 
              private authService: AuthService, 
              private encuestaService: EncuestaService) 
    {
    this.formulario = fb.group({
      nombre : ['', Validators.required],
      apellido : ['', Validators.required],
      edad: ['', [Validators.required, Validators.min(18), Validators.max(99)]],
      telefono: ['', [Validators.required, Validators.pattern("[0-9 ]{10}")]],
      localidad: ['', Validators.required],
      sexo: ['', Validators.required],
      intereses: new FormArray([]),
    });
   }

  ngOnInit(): void {
  }

  aceptar(){

    this.encuestaService.savePoll(this.formulario.value, this.authService.userData.email) 
  }

  onCheckChange(event : any) {
    const formArray: FormArray = this.formulario.get('intereses') as FormArray;
  
    /* Selected */
    if(event.target.checked){
      // Add a new control in the arrayForm
      formArray.push(new FormControl(event.target.value));
    }
    /* unselected */
    else{
      // find the unselected element
      let i: number = 0;
  
      formArray.controls.forEach((ctrl) => {
        if(ctrl.value == event.target.value) {
          // Remove the unselected element from the arrayForm
          formArray.removeAt(i);
          return;
        }
  
        i++;
      });
    }
  }

}

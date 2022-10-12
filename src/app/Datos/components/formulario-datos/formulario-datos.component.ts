import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Empleo, DatosPersona } from '../../interface/datos.interface';

@Component({
  selector: 'app-formulario-datos',
  templateUrl: './formulario-datos.component.html',
  styleUrls: ['./formulario-datos.component.css']
})
export class FormularioDatosComponent implements OnInit {


  @Input()form:FormGroup
  @Input()empleos:Empleo[]=[]

  @Output()onSubmit : EventEmitter<FormGroup>= new EventEmitter();

  constructor(public formBuilder: FormBuilder) { 
    this.form = this.formBuilder.group({
      nombre:[''],
      apellido:[''],
      celular:[''],
      empleo:['']
    }) 
  }

  ngOnInit(): void {
  }

  emitir(){
    this.onSubmit.emit(this.form)
  }

}

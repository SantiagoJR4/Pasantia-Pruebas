import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../Service/datos.service';
import { Empleo, DatosPersona } from '../../interface/datos.interface';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  empleos:Empleo[]=[];
  public form:FormGroup

  body:DatosPersona={
    nombre:'',
    apellido:'',
    celular:-1,
    empleo:-1
  }
  
  constructor(private datosService:DatosService,public formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      nombre:[''],
      apellido:[''],
      celular:[''],
      empleo:['']
    }) 
  }

  ngOnInit(): void {
    this.datosService.obtenerEmpleos().subscribe(res=>this.empleos=res);
  }

  crearPersona(body:DatosPersona){
    this.datosService.crear(body).subscribe(res=>{console.log(res)})
  }

  onSubmit(){
    this.datosService.crear(this.form.value).subscribe(res=>console.log(res));
    this.form.reset();
  }
}

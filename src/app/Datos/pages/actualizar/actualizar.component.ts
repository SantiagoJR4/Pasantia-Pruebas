import { Component, OnInit } from '@angular/core';
import { Datos, DatosPersona } from '../../interface/datos.interface';
import { DatosService } from '../../Service/datos.service';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {



  constructor(private datosservice:DatosService) { }

  ngOnInit(): void {
  
  }

  actualizar(id:number, body:Datos){
    const datospersona : DatosPersona = {
      nombre:body.nombre,
      apellido:body.apellido,
      celular:body.celular,
      empleo:body.empleo.id
    }

    this.datosservice.actualizar(id,datospersona).subscribe(res=>console.log(res));
  }
}

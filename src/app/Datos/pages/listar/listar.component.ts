import { Component, OnInit } from '@angular/core';
import { Datos} from '../../interface/datos.interface';
import { DatosService } from '../../Service/datos.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  datos:Datos[] = []

  constructor(private datosservice:DatosService) { }

  ngOnInit(): void {
    this.datosservice.obtener()
    .subscribe(res=>this.datos=res);
  }

  borrar(id:number, index:number){
    this.datosservice.borrar(id).subscribe(res=>console.log(res));
    this.datos.splice(index,1);
  }

}

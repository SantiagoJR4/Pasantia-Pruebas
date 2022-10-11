import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../Service/datos.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  datos:any = []

  constructor(private datosservice:DatosService) { }

  ngOnInit(): void {
    this.datosservice.obtener()
    .subscribe((res:any)=>{console.log(res)})
  }

}

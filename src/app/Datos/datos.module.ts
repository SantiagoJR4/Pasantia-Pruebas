import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './pages/listar/listar.component';
import { CrearComponent } from './pages/crear/crear.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ActualizarComponent } from './pages/actualizar/actualizar.component';
import { FormularioDatosComponent } from './components/formulario-datos/formulario-datos.component';

@NgModule({
  declarations: [
    ListarComponent,
    CrearComponent,
    ActualizarComponent,
    FormularioDatosComponent,
  ],
  imports: [
    CommonModule,ReactiveFormsModule,RouterModule
  ],
  exports:[
    ListarComponent,CrearComponent
  ]
})
export class DatosModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './Datos/pages/listar/listar.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CrearComponent } from './Datos/pages/crear/crear.component';

const routes: Routes = [
  {path:'',component:NavbarComponent,pathMatch:'full'},
  {path:'listar',component:ListarComponent},
  {path:'crear',component:CrearComponent},
  {path:'home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

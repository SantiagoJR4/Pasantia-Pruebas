import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Datos, Empleo, crearPersona } from '../interface/datos.interface';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  rutaApi='http://127.0.0.1:8000/';

  constructor(private http:HttpClient) { }

  obtener():Observable<Datos[]>{

    return this.http.get<Datos[]>(`${this.rutaApi}persona`)
  }
  obtenerEmpleos():Observable<Empleo[]>{
    return this.http.get<Empleo[]>(`${this.rutaApi}empleo`)
  }

  crear(body:crearPersona):Observable<crearPersona>{
    return this.http.post<crearPersona>(`${this.rutaApi}crear/persona`,body)
  }
  borrar(id:number):Observable<number>{
    return this.http.delete<number>(`${this.rutaApi}borrar/persona/${id}`)
  }
}

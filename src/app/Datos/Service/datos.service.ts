import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Datos, Empleo,DatosPersona } from '../interface/datos.interface';

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

  crear(body:DatosPersona):Observable<DatosPersona>{
    return this.http.post<DatosPersona>(`${this.rutaApi}crear/persona`,body)
  }
  borrar(id:number):Observable<number>{
    return this.http.delete<number>(`${this.rutaApi}borrar/persona/${id}`)
  }
  actualizar(id:number, body:DatosPersona):Observable<DatosPersona>{
    return this.http.put<DatosPersona>(`${this.rutaApi}actualizar/persona/${id}`,body);
  }
}

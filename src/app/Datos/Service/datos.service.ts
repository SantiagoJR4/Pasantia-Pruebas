import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  rutaApi='http://127.0.0.1:8000/';

  constructor(private http:HttpClient) { }

  obtener(){
    return this.http.get(`${this.rutaApi}persona`)
  }
}

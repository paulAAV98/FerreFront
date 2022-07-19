import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Producto } from '../Modelo/Producto';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  sucursal!: String;
  constructor(private http:HttpClient) { }

  Url ='http://localhost:8080/sucursal';
  getSucursales(){
  return this.http.get<String[]>(this.Url+'/Lista')

  };
  Urlp ='http://localhost:8080/sucursal';
  getProductos(producto:String){

    return this.http.post<String[]>(this.Urlp,producto)

  }

  
}

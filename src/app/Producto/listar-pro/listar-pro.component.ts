import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/Modelo/Producto';
import { Sucursal } from 'src/app/Modelo/Sucursal';
import { ServiceService } from '../../Service/service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar-Pro.component.html',
  styleUrls: ['./listar-Pro.component.css']
})
export class ListarProComponent implements OnInit {
  suc:Sucursal = new Sucursal();
  constructor(private router:Router,private service:ServiceService) { }
  
  ngOnInit(): void {

    
  }

  Buscar(){
    console.log(this.suc);


  }
  }
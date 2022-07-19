import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sucursal } from 'src/app/Modelo/Sucursal';
import { ServiceService } from '../../Service/service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  sucursales: String[] = [];
  constructor(private service:ServiceService,private router:Router) { }

  ngOnInit(){
    this.service.getSucursales()
    .subscribe(data=>{
      this.sucursales=data  

    })


  }

}

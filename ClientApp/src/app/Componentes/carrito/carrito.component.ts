import { Component, OnInit } from '@angular/core';
import { CarritoService} from '../../servicios/carrito.service';
import { VistaProductoService} from '../../servicios/vista-producto.service';
import {Carrito} from '../../models/carrito';
import { VistaProducto} from '../../models/vista-producto';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  
  VC : Carrito[];
  VP : VistaProducto[];

  constructor(private  VCService: CarritoService, private VPservice: VistaProductoService) { }


  ngOnInit() {this.getAllCar();  }
 


  getAllCar(){
    this.VCService.getAll().subscribe(VC=>this.VC=VC);
    }


}

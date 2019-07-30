import { Component, OnInit } from '@angular/core';
import { VistaProductoService } from '../../servicios/vista-producto.service';
import { VistaProducto } from '../../models/vista-producto';

import { CarritoService } from '../../servicios/carrito.service';
import { Carrito } from '../../models/carrito';

@Component({
  selector: 'app-ventas-hombre',
  templateUrl: './ventas-hombre.component.html',
  styleUrls: ['./ventas-hombre.component.css']
})
export class VentasHombreComponent implements OnInit {

  VP: VistaProducto[];
  car: Carrito;
  constructor(
    private VPService: VistaProductoService,
    private CarService: CarritoService

  ) { }


  ngOnInit() { this.getAll(); this.cat = "blusas"; this.sexo = "mujer"; }
  public cat: string;
  public sexo: string;


  getAll() {
    this.VPService.getAll().subscribe(VP => this.VP = VP);
  }



  addCarrito() {
    alert(JSON.stringify(this.car));
    this.CarService.addCarrito(this.car)
    .subscribe(car => { 
      alert('Se agrego al carrito') });
  }

}

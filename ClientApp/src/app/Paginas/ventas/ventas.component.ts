import { Component, OnInit } from '@angular/core';
import {VistaProductoService} from '../../servicios/vista-producto.service';
import {VistaProducto} from '../../models/vista-producto';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  VP : VistaProducto[];

  constructor(private  VPService: VistaProductoService) { }

  ngOnInit() {this.getAll(); this.cat="blusas"; this.sexo="mujer"; }
  public cat: string;
  public sexo: string;


  getAll(){
    this.VPService.getAll().subscribe(VP=>this.VP=VP);
    }


}

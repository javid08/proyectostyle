import { Component, OnInit, Input } from '@angular/core';   
import {VistaProductoService} from '../../servicios/vista-producto.service';
import {VistaProducto} from '../../models/vista-producto';


@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})

export class GaleriaComponent implements OnInit {

  VP : VistaProducto[];

  constructor(private  VPService: VistaProductoService) { }

  ngOnInit() {this.getAll(); }

  getAll(){
    this.VPService.getAll().subscribe(VP=>this.VP=VP);
    }

 @Input() public mensaje: string;

  resivir(mensaje){
    this.mensaje;
  }

}

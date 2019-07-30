import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-h',
  templateUrl: './menu-h.component.html',
  styleUrls: ['./menu-h.component.css']
})
export class MenuHComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }
  public mensaje: string;
 

  @Output() filtro = new EventEmitter<string>();

  onFiltro() {
    this.filtro.emit( this.mensaje);
  }
 
}

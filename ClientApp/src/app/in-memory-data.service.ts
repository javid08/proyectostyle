import { InMemoryDbService } from 'angular-in-memory-web-api';
import {VistaProducto} from './models/vista-producto';
import { ngModuleJitUrl } from '@angular/compiler';


export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    
    const vista_productos = [

      {pro_url: "../../../assets/img/jeans1.jpg", pro_descripcion: "Ripped Skinny Jeans" , pro_precio:54000 , pro_cod: 1 ,pro_cat: "jeans", pro_sexo: "hombre"},
      {pro_url: "../../../assets/img/jeans2.jpg", pro_descripcion: "Ripped Skinny Jeans" , pro_precio:54000 , pro_cod: 1,pro_cat: "jeans", pro_sexo: "hombre"},
      {pro_url: "../../../assets/img/jeans3.jpg", pro_descripcion: "Ripped Skinny Jeans" , pro_precio:54000 , pro_cod: 1 ,pro_cat: "jeans", pro_sexo: "hombre"},
      {pro_url: "../../../assets/img/jeans4.jpg", pro_descripcion: "Ripped Skinny Jeans" , pro_precio:54000 , pro_cod: 1 ,pro_cat: "jeans", pro_sexo: "hombre"},
      {pro_url: "../../../assets/img/jeans1.jpg", pro_descripcion: "Ripped Skinny Jeans" , pro_precio:54000 , pro_cod: 1 ,pro_cat: "jeans", pro_sexo: "hombre"},
      {pro_url: "../../../assets/img/jeans2.jpg", pro_descripcion: "Ripped Skinny Jeans" , pro_precio:54000 , pro_cod: 1 ,pro_cat: "jeans", pro_sexo: "hombre"},
      {pro_url: "../../../assets/img/jeans3.jpg", pro_descripcion: "Ripped Skinny Jeans" , pro_precio:54000 , pro_cod: 1,pro_cat: "jeans", pro_sexo: "hombre"},
      {pro_url: "../../../assets/img/jeans4.jpg", pro_descripcion: "Ripped Skinny Jeans" , pro_precio:54000 , pro_cod: 1 ,pro_cat: "jeans", pro_sexo: "hombre"},
      
  //mujeres - jeans
      {pro_url: "../../../assets/img/jeans_mujer/01.jpg", pro_descripcion: "Ripped Skinny Jeans" , pro_precio:54000 , pro_cod: "m-j-1", pro_cat: "jeans", pro_sexo: "mujer"},
      {pro_url: "../../../assets/img/jeans_mujer/02.jpg", pro_descripcion: "Ripped Skinny Jeans" , pro_precio:54000 , pro_cod: "m-j-1", pro_cat: "jeans", pro_sexo: "mujer"},
      {pro_url: "../../../assets/img/jeans_mujer/03.jpg", pro_descripcion: "Ripped Skinny Jeans" , pro_precio:54000 , pro_cod: "m-j-1", pro_cat: "jeans", pro_sexo: "mujer"},
      {pro_url: "../../../assets/img/jeans_mujer/04.jpg", pro_descripcion: "Ripped Skinny Jeans" , pro_precio:54000 , pro_cod: "m-j-1", pro_cat: "jeans", pro_sexo: "mujer"},
      {pro_url: "../../../assets/img/jeans_mujer/05.jpg", pro_descripcion: "Ripped Skinny Jeans" , pro_precio:54000 , pro_cod: "m-j-1", pro_cat: "jeans", pro_sexo: "mujer"},
      {pro_url: "../../../assets/img/jeans_mujer/06.jpg", pro_descripcion: "Ripped Skinny Jeans" , pro_precio:54000 , pro_cod: "m-j-1", pro_cat: "jeans", pro_sexo: "mujer"},
      {pro_url: "../../../assets/img/jeans_mujer/07.jpg", pro_descripcion: "Ripped Skinny Jeans" , pro_precio:54000 , pro_cod: "m-j-1", pro_cat: "jeans", pro_sexo: "mujer"},
      {pro_url: "../../../assets/img/jeans_mujer/08.jpg", pro_descripcion: "Ripped Skinny Jeans" , pro_precio:54000 , pro_cod: "m-j-1", pro_cat: "jeans", pro_sexo: "mujer"},
//mujeres  -  blusas
      {pro_url: "../../../assets/img/blusas_mujer/01.jpg", pro_descripcion: "Ripped Skinny Jeans" , pro_precio:54000 , pro_cod: 3, pro_cat: "blusas", pro_sexo: "mujer"},
      {pro_url: "../../../assets/img/blusas_mujer/02.jpg", pro_descripcion: "Ripped Skinny Jeans" , pro_precio:54000 , pro_cod: 3, pro_cat: "blusas", pro_sexo: "mujer"},
      {pro_url: "../../../assets/img/blusas_mujer/03.jpg", pro_descripcion: "Ripped Skinny Jeans" , pro_precio:54000 , pro_cod: 3, pro_cat: "blusas", pro_sexo: "mujer"},
      {pro_url: "../../../assets/img/blusas_mujer/04.jpg", pro_descripcion: "Ripped Skinny Jeans" , pro_precio:54000 , pro_cod: 3, pro_cat: "blusas", pro_sexo: "mujer"},
      {pro_url: "../../../assets/img/blusas_mujer/05.jpg", pro_descripcion: "Ripped Skinny Jeans" , pro_precio:54000 , pro_cod: 3, pro_cat: "blusas", pro_sexo: "mujer"},
      {pro_url: "../../../assets/img/blusas_mujer/06.jpg", pro_descripcion: "Ripped Skinny Jeans" , pro_precio:54000 , pro_cod: 3, pro_cat: "blusas", pro_sexo: "mujer"},
      {pro_url: "../../../assets/img/blusas_mujer/07.jpg", pro_descripcion: "Ripped Skinny Jeans" , pro_precio:54000 , pro_cod: 3, pro_cat: "blusas", pro_sexo: "mujer"},
      {pro_url: "../../../assets/img/blusas_mujer/08.jpg", pro_descripcion: "Ripped Skinny Jeans" , pro_precio:54000 , pro_cod: 3, pro_cat: "blusas", pro_sexo: "mujer"},
//mujeres - vestidos
      {pro_url: "../../../assets/img/vestidos_mujer/01.jpg", pro_descripcion: "Ripped Skinny Jeans" , pro_precio:54000 , pro_cod: 3, pro_cat: "vestidos", pro_sexo: "mujer"},
      {pro_url: "../../../assets/img/vestidos_mujer/02.jpg", pro_descripcion: "Ripped Skinny Jeans" , pro_precio:54000 , pro_cod: 3, pro_cat: "vestidos", pro_sexo: "mujer"},
      {pro_url: "../../../assets/img/vestidos_mujer/03.jpg", pro_descripcion: "Ripped Skinny Jeans" , pro_precio:54000 , pro_cod: 3, pro_cat: "vestidos", pro_sexo: "mujer"},
      {pro_url: "../../../assets/img/vestidos_mujer/04.jpg", pro_descripcion: "Ripped Skinny Jeans" , pro_precio:54000 , pro_cod: 3, pro_cat: "vestidos", pro_sexo: "mujer"},
      {pro_url: "../../../assets/img/vestidos_mujer/05.jpg", pro_descripcion: "Ripped Skinny Jeans" , pro_precio:54000 , pro_cod: 3, pro_cat: "vestidos", pro_sexo: "mujer"},
      {pro_url: "../../../assets/img/vestidos_mujer/06.jpg", pro_descripcion: "Ripped Skinny Jeans" , pro_precio:54000 , pro_cod: 3, pro_cat: "vestidos", pro_sexo: "mujer"},
      {pro_url: "../../../assets/img/vestidos_mujer/07.jpg", pro_descripcion: "Ripped Skinny Jeans" , pro_precio:54000 , pro_cod: 3, pro_cat: "vestidos", pro_sexo: "mujer"},
      {pro_url: "../../../assets/img/vestidos_mujer/08.jpg", pro_descripcion: "Ripped Skinny Jeans" , pro_precio:54000 , pro_cod: 3, pro_cat: "vestidos", pro_sexo: "mujer"},
//mujeres - chaquetas
      {pro_url: "../../../assets/img/chaquetas_mujer/01.jpg", pro_descripcion: "Ripped Skinny Jeans" , pro_precio:54000 , pro_cod: 3, pro_cat: "chaquetas", pro_sexo: "mujer"},
      {pro_url: "../../../assets/img/chaquetas_mujer/02.jpg", pro_descripcion: "Ripped Skinny Jeans" , pro_precio:54000 , pro_cod: 3, pro_cat: "chaquetas", pro_sexo: "mujer"},
      {pro_url: "../../../assets/img/chaquetas_mujer/03.jpg", pro_descripcion: "Ripped Skinny Jeans" , pro_precio:54000 , pro_cod: 3, pro_cat: "chaquetas", pro_sexo: "mujer"},
      {pro_url: "../../../assets/img/chaquetas_mujer/04.jpg", pro_descripcion: "Ripped Skinny Jeans" , pro_precio:54000 , pro_cod: 3, pro_cat: "chaquetas", pro_sexo: "mujer"},
      {pro_url: "../../../assets/img/chaquetas_mujer/05.jpg", pro_descripcion: "Ripped Skinny Jeans" , pro_precio:54000 , pro_cod: 3, pro_cat: "chaquetas", pro_sexo: "mujer"},
      {pro_url: "../../../assets/img/chaquetas_mujer/06.jpg", pro_descripcion: "Ripped Skinny Jeans" , pro_precio:54000 , pro_cod: 3, pro_cat: "chaquetas", pro_sexo: "mujer"},
      {pro_url: "../../../assets/img/chaquetas_mujer/07.jpg", pro_descripcion: "Ripped Skinny Jeans" , pro_precio:54000 , pro_cod: 3, pro_cat: "chaquetas", pro_sexo: "mujer"},
      {pro_url: "../../../assets/img/chaquetas_mujer/08.jpg", pro_descripcion: "Ripped Skinny Jeans" , pro_precio:54000 , pro_cod: 3, pro_cat: "chaquetas", pro_sexo: "mujer"},
//mujeres - gymwear
      {pro_url: "../../../assets/img/gymwear_mujer/01.jpg", pro_descripcion: "Ripped Skinny Jeans" , pro_precio:54000 , pro_cod: 3, pro_cat: "gymwear", pro_sexo: "mujer"},
      {pro_url: "../../../assets/img/gymwear_mujer/02.jpg", pro_descripcion: "Ripped Skinny Jeans" , pro_precio:54000 , pro_cod: 3, pro_cat: "gymwear", pro_sexo: "mujer"},
      {pro_url: "../../../assets/img/gymwear_mujer/03.jpg", pro_descripcion: "Ripped Skinny Jeans" , pro_precio:54000 , pro_cod: 3, pro_cat: "gymwear", pro_sexo: "mujer"},
      {pro_url: "../../../assets/img/gymwear_mujer/04.jpg", pro_descripcion: "Ripped Skinny Jeans" , pro_precio:54000 , pro_cod: 3, pro_cat: "gymwear", pro_sexo: "mujer"},
//Mujeres - blazers
      {pro_url: "../../../assets/img/blazers_mujer/01.jpg", pro_descripcion: "Ripped Skinny Jeans" , pro_precio:54000 , pro_cod: 3, pro_cat: "blazers", pro_sexo: "mujer"},
      {pro_url: "../../../assets/img/blazers_mujer/02.jpg", pro_descripcion: "Ripped Skinny Jeans" , pro_precio:54000 , pro_cod: 3, pro_cat: "blazers", pro_sexo: "mujer"},
      {pro_url: "../../../assets/img/blazers_mujer/03.jpg", pro_descripcion: "Ripped Skinny Jeans" , pro_precio:54000 , pro_cod: 3, pro_cat: "blazers", pro_sexo: "mujer"},
      {pro_url: "../../../assets/img/blazers_mujer/04.jpg", pro_descripcion: "Ripped Skinny Jeans" , pro_precio:54000 , pro_cod: 3, pro_cat: "blazers", pro_sexo: "mujer"},
      {pro_url: "../../../assets/img/blazers_mujer/05.jpg", pro_descripcion: "Ripped Skinny Jeans" , pro_precio:54000 , pro_cod: 3, pro_cat: "blazers", pro_sexo: "mujer"},
      {pro_url: "../../../assets/img/blazers_mujer/06.jpg", pro_descripcion: "Ripped Skinny Jeans" , pro_precio:54000 , pro_cod: 3, pro_cat: "blazers", pro_sexo: "mujer"},
      {pro_url: "../../../assets/img/blazers_mujer/07.jpg", pro_descripcion: "Ripped Skinny Jeans" , pro_precio:54000 , pro_cod: 3, pro_cat: "blazers", pro_sexo: "mujer"},
      {pro_url: "../../../assets/img/blazers_mujer/08.jpg", pro_descripcion: "Ripped Skinny Jeans" , pro_precio:54000 , pro_cod: 3, pro_cat: "blazers", pro_sexo: "mujer"},
//mujeres - zapatos
      {pro_url: "../../../assets/img/zapatos_mujer/01.jpg", pro_descripcion: "Ripped Skinny Jeans" , pro_precio:54000 , pro_cod: 3, pro_cat: "zapatos", pro_sexo: "mujer"},
      {pro_url: "../../../assets/img/zapatos_mujer/02.jpg", pro_descripcion: "Ripped Skinny Jeans" , pro_precio:54000 , pro_cod: 3, pro_cat: "zapatos", pro_sexo: "mujer"},
      {pro_url: "../../../assets/img/zapatos_mujer/03.jpg", pro_descripcion: "Ripped Skinny Jeans" , pro_precio:54000 , pro_cod: 3, pro_cat: "zapatos", pro_sexo: "mujer"},
      {pro_url: "../../../assets/img/zapatos_mujer/04.jpg", pro_descripcion: "Ripped Skinny Jeans" , pro_precio:54000 , pro_cod: 3, pro_cat: "zapatos", pro_sexo: "mujer"},
      {pro_url: "../../../assets/img/zapatos_mujer/05.jpg", pro_descripcion: "Ripped Skinny Jeans" , pro_precio:54000 , pro_cod: 3, pro_cat: "zapatos", pro_sexo: "mujer"},
      {pro_url: "../../../assets/img/zapatos_mujer/06.jpg", pro_descripcion: "Ripped Skinny Jeans" , pro_precio:54000 , pro_cod: 3, pro_cat: "zapatos", pro_sexo: "mujer"},
      {pro_url: "../../../assets/img/zapatos_mujer/07.jpg", pro_descripcion: "Ripped Skinny Jeans" , pro_precio:54000 , pro_cod: 3, pro_cat: "zapatos", pro_sexo: "mujer"},
      {pro_url: "../../../assets/img/zapatos_mujer/08.jpg", pro_descripcion: "Ripped Skinny Jeans" , pro_precio:54000 , pro_cod: 3, pro_cat: "zapatos", pro_sexo: "mujer"},
      
    ];

  const vista_carrito= [
      {car_cod: "m-j-1", car_url:"../../../assets/img/jeans_mujer/01.jpg", car_descripcion: "ropa de vestir", car_precio: 80000},
  ];  

    
    return { vista_productos, vista_carrito};
  }
}


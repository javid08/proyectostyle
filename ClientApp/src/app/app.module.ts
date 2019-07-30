import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';

import { InicioComponent } from './Paginas/inicio/inicio.component';
import { MenuComponent } from './Componentes/menu/menu.component';
import { FooterComponent } from './Componentes/footer/footer.component';
import { VentasComponent } from './Paginas/ventas/ventas.component';
import { GaleriaComponent } from './componentes/galeria/galeria.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuHComponent } from './componentes/menu-h/menu-h.component';
import { VentasHombreComponent } from './paginas/ventas-hombre/ventas-hombre.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    MenuComponent,
    FooterComponent,
    VentasComponent,
    GaleriaComponent,
    MenuHComponent,
    VentasHombreComponent,
    CarritoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
    InMemoryDataService, { dataEncapsulation: false }),
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: InicioComponent, pathMatch: 'full' },
      { path: 'inicio', component: InicioComponent},
      { path: 'login', component: LoginComponent},
      { path: 'ventas_mujer', component: VentasComponent},
      { path: 'ventas_hombre', component: VentasHombreComponent},
      { path: 'carrito', component: CarritoComponent},
    ]),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

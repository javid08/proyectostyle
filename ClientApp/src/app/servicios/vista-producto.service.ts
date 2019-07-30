
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { VistaProducto } from '../models/vista-producto';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class VistaProductoService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }



  addCliente(vistaproductos: VistaProducto): Observable<VistaProducto> {
    alert(JSON.stringify(vistaproductos));
    return this.http.post<VistaProducto>(this.baseUrl + 'api/Vista_productos', vistaproductos, httpOptions).pipe(
      tap((newProducto: VistaProducto) => this.log(`added producto w/ id=${newProducto.pro_cod}`)),
      catchError(this.handleError<VistaProducto>('addCliente'))
    );
  }

  getAll(): Observable<VistaProducto[]> {
    return this.http.get<VistaProducto[]>(this.baseUrl + 'api/vista_productos')
      .pipe(catchError(this.handleError<VistaProducto[]>('getAll', []))
      );
  }

  get(pro_cod: number): Observable<VistaProducto> {
    const url = `${this.baseUrl + 'api/Vista_productos'}/${pro_cod}`;
    return this.http.get<VistaProducto>(url).pipe(
      tap(_ => this.log(`fetched producto codigo=${pro_cod}`)),
      catchError(this.handleError<VistaProducto>(`getHero id=${pro_cod}`))
    );
  }

  update(vistaproductos: VistaProducto): Observable<any> {
    const url = `${this.baseUrl + 'api/Vista_produtos'}/${vistaproductos.pro_cod}`;
    return this.http.put(url, vistaproductos, httpOptions).pipe(
      tap(_ => this.log(`updated task id=${vistaproductos.pro_cod}`)),
      catchError(this.handleError<any>('task'))
    );
  }

  delete(vistaproductos: VistaProducto | number): Observable<VistaProducto> {
    const pro_cod = typeof vistaproductos === 'number' ? vistaproductos : vistaproductos.pro_cod;
    const url = `${this.baseUrl + 'api/Task'}/${pro_cod}`;

    return this.http.delete<VistaProducto>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted task id=${pro_cod}`)),
      catchError(this.handleError<VistaProducto>('deleteTask'))
    );
  }



  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    alert(`VistaProductoService: ${message}`);
  }


}

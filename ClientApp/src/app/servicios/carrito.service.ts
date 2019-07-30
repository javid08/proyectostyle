import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Carrito } from '../models/carrito';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }


  addCarrito(car: Carrito): Observable<Carrito> {
    return this.http.post<Carrito>(this.baseUrl + 'api/vista_carrito', car, httpOptions).pipe(
     tap((newcar: Carrito) => this.log(`agrego al carrito=${newcar.car_cod}`)),  
      catchError(this.handleError<Carrito>('addCarrito'))
    );
  }


  getAll(): Observable<Carrito[]> {
    return this.http.get<Carrito[]>(this.baseUrl + 'api/vista_carrito').pipe(
      tap(_ => this.log('carrito')),
      catchError(this.handleError<Carrito[]>('getAll', []))
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
    alert(`CarritoService: ${message}`);
  }

}

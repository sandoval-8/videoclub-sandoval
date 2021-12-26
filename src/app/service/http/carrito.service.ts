import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carrito } from 'src/app/modelo/carrito';

const URL_CARRITO:string = 'https://demo7938222.mockable.io/carrito';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor(private http:HttpClient) { }

  public getCarrito():Observable<Carrito[]> {
    return this.http.get<Carrito[]>(URL_CARRITO);
  }

  public setCarrito(carrito:Carrito): Observable<Carrito>{
    return this.http.post<Carrito>(URL_CARRITO, carrito);
  }

}

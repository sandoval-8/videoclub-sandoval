import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pelicula } from 'src/app/modelo/pelicula';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private URL = 'https://61d8db6de6744d0017ba8cd3.mockapi.io/peliculas';

  constructor(private http:HttpClient) { }

  create(pelicula:Pelicula):Observable<Pelicula> {
    return this.http.post<Pelicula>(this.URL, pelicula);
  }

  edit(id:number, pelicula: Pelicula):Observable<Pelicula> {
    return this.http.put<Pelicula>(this.URL + '/' + id,pelicula);
  }

  delete(id:number):Observable<Pelicula> {
    return this.http.delete<Pelicula>(this.URL + "/" + id);
  }
}

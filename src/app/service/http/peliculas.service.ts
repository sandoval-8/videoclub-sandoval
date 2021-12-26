import { Injectable } from '@angular/core';
import { Pelicula } from "../../../../../videomania-sandoval/src/app/modelo/pelicula";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private URL = "https://demo7938222.mockable.io/peliculas";

  constructor(private http:HttpClient) { }

  getAllMovie():Observable<Pelicula[]>{
    return this.http.get<Pelicula[]>(this.URL);
  }
  
  getMovie(id:number):Observable<Pelicula> {
    return this.http.get<Pelicula[]>(this.URL).pipe(
      map((arrayPelicula)=>{
        return arrayPelicula[id];
      })
    );
  }
}

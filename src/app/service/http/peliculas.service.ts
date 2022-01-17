import { Injectable } from '@angular/core';
import { Pelicula } from "../../modelo/pelicula";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private URL = 'https://61d8db6de6744d0017ba8cd3.mockapi.io/peliculas';

  constructor(private http:HttpClient) { }

  getAllMovie():Observable<Pelicula[]>{
    return this.http.get<Pelicula[]>(this.URL);
  }
  
  getMovie(id:number):Observable<Pelicula> {
    return this.http.get<Pelicula>(this.URL + "/" + id);
  }
}

import {Component, OnDestroy, OnInit} from '@angular/core';
import {PeliculasService} from "../../../service/http/peliculas.service";
import {Observable, Subscription} from "rxjs";
import {Pelicula} from "../../../modelo/pelicula";
import { CarritoService } from 'src/app/service/http/carrito.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {

  obs$:Observable<Pelicula[]>;

  peliculas:Pelicula[] = [];

  descripcion:string = '';

  subscription:Subscription = new Subscription();

  constructor(private httpPeliculaService:PeliculasService, private carritoService:CarritoService) {
    this.obs$ = this.httpPeliculaService.getAllMovie();
  }

  ngOnInit(): void {
    this.subscription = this.obs$.subscribe((peliculas) => {
      console.log(peliculas);
      this.peliculas = peliculas;
    });
    console.log("Se subscribio al evento");
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe;
    console.log("Se DESubscribio al evento");
  }

  /* Editar Interpolación */
  
  carrito(pelicula:Pelicula) {
    console.log("se ejecuto carrito");
    this.carritoService.setCarrito(
      {
        "nombre":pelicula.nombre,
        "clasificacion": pelicula.clasificacion.clasificacion,
        "cantidad": 1,
        "precio": pelicula.precio
      }
    ).subscribe;
  }

/*  getListMovie(){
    this.httpPeliculaService.getAllMovie().subscribe((peliculas) => {
      console.log(peliculas);
      this.peliculas = peliculas;
    });
  } */
/*
  info(id:number){
    console.log('id:' + id);
    this.router.navigate(['info/' + id]);
  } */
}

import {Component, OnDestroy, OnInit} from '@angular/core';
import {PeliculasService} from "../../../service/http/peliculas.service";
import {Observable, Subscription} from "rxjs";
import {Pelicula} from "../../../modelo/pelicula";

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

  constructor(private httpPeliculaService:PeliculasService) {
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
  
  editar() {
    
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

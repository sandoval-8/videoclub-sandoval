import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Carrito } from 'src/app/modelo/carrito';
import { Pelicula } from 'src/app/modelo/pelicula';
import { CarritoService } from 'src/app/service/http/carrito.service';
import { PeliculasService } from 'src/app/service/http/peliculas.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  idPelicula:Params = {id:''};

  pelicula:Pelicula = {id:0, nombre:'', precio:0, clasificacion:{clasificacion:'none'}};

  obs:Subscription = new Subscription();

  constructor(private rutaActiva: ActivatedRoute, private service:PeliculasService, private serviceCarrito: CarritoService, private router:Router) { }

  ngOnInit(): void {
    this.paramRouter();
    this.getPeliculaForId(this.idPelicula.id);
  }

  ngOnDestroy(): void {
    this.obs.unsubscribe();
    console.log("Se destruyo el subscribe")
  }

  paramRouter(){ //Recupera la ID de la pelicula del parametro de la ruta (localhost:4200/info:id)
    this.obs = this.rutaActiva.params.subscribe((params: Params) => {
      this.idPelicula = params;
      console.log(this.idPelicula.id);
    })
  }

  getPeliculaForId(id:number){ //Busca UNA SOLA pelicula a partir del ID
    this.service.getMovie(id).subscribe((pelicula) => {
      this.pelicula = pelicula;
      console.log('pelicula:' + pelicula);
      console.log('clasificacion:' + pelicula.clasificacion.clasificacion);
    });
  }
//---------------------------------------------
  agregarAlCarrito(id:number){
    let peliculaCarrito:Carrito = {
      id:this.pelicula.id,
      nombre: this.pelicula.nombre,
      cantidad: 1,
      precio: this.pelicula.precio,
    };
    this.serviceCarrito.setCarrito(peliculaCarrito).subscribe();
    this.router.navigate(['/webapp/carrito']);
  }
}

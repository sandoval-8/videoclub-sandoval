import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/modelo/pelicula';
import { DashboardService } from 'src/app/service/http/dashboard.service';
import { PeliculasService } from 'src/app/service/http/peliculas.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  peliculas:Pelicula[] = [];
  displayedColumns: string[] = ['id', 'Nombre', 'Clasificación', 'Acción'];

  constructor(private httpDashboard: DashboardService, private httpPelicula: PeliculasService) { }

  ngOnInit(): void {
    this.getPeliculas();
  }

  eliminar(id:number){
    console.log("ID:" + id);
  }

  deletePelicula(id:number){
    this.httpDashboard.delete(id).subscribe(() => {
      console.log("Se elimino el elemento: " + id);
    });
  }

  //Solamente solicita TODAS las peliculas para mostrar una lista
  getPeliculas(){
    this.httpPelicula.getAllMovie().subscribe((listPeliculasOfDDBB:Pelicula[])=> {
      this.peliculas = listPeliculasOfDDBB;
    });
  }

}

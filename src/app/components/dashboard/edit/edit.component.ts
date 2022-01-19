import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Pelicula } from 'src/app/modelo/pelicula';
import { DashboardService } from 'src/app/service/http/dashboard.service';
import { PeliculasService } from 'src/app/service/http/peliculas.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  private id_inmutable: number = 0;

  formGroup:FormGroup;

  constructor(private formBuilder:FormBuilder, private httpPelicula:PeliculasService, private httpDashboard: DashboardService) {
    this.formGroup = this.formBuilder.group(
      {
        id: [''],
        nombre: [''],
        precio: [''],
        clasificacion: [''],
        descripcion: ['']
      }
    );
  }

  ngOnInit(): void {
  }

  editar() {
    let id = this.formGroup.get('id')?.value;
    let peliculaUpdate:Pelicula = this.formGroup.value;
    if(id){
      this.id_inmutable = this.formGroup.get('id')?.value;
      this.httpDashboard.edit(this.id_inmutable, peliculaUpdate).subscribe();
    }else {

    }
  }

  buscarPelicula() {
    let id = this.formGroup.get('id')?.value;
    if(id){
      this.httpPelicula.getMovie(id).subscribe((pelicula)=>{
        this.formGroup.get("nombre")?.setValue(pelicula.nombre);
        this.formGroup.get("precio")?.setValue(pelicula.precio);
        this.formGroup.get("clasificacion")?.setValue(pelicula.clasificacion.clasificacion);
        this.formGroup.get("descripcion")?.setValue(pelicula.descripcion);
      }); 
    }else {
      this.formGroup.reset();
    }    
  }

}

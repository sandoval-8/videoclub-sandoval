import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Pelicula } from 'src/app/modelo/pelicula';
import { PeliculasService } from 'src/app/service/http/peliculas.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  formGroup:FormGroup;

  constructor(private formBuilder:FormBuilder, private httpPelicula:PeliculasService) {
    this.formGroup = this.formBuilder.group(
      {
        id: [''],
        pelicula: [''],
        precio: [''],
        clasificacion: [''],
        descripcion: ['']
      }
    );
  }

  ngOnInit(): void {
  }

  buscarPelicula() {
    let id = document.getElementById("inputId")?.getAttribute("value");
    console.log("id:" + id);
/*    this.httpPelicula.getMovie(id).subscribe((pelicula)=>{
      this.formGroup.get("pelicula")?.setValue("hola");
    }); */
  }

}

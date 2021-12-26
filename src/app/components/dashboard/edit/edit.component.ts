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

  constructor(private formBuilder:FormBuilder, private http:PeliculasService) {
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
    let id = this.formGroup.get("id")?.value;
    console.log("id:" + id);
    this.http.getMovie(id).subscribe((pelicula)=>{
      this.formGroup.get("pelicula")?.setValue("hola");
    });
  }

}

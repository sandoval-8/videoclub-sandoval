import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PeliculasService } from 'src/app/service/http/peliculas.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

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

  

}

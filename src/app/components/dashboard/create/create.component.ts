import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Pelicula } from 'src/app/modelo/pelicula';
import { DashboardService } from 'src/app/service/http/dashboard.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  formGroup:FormGroup;

  constructor(private formBuilder:FormBuilder, private http:DashboardService) {
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

  enviar(){
    const pelicula:Pelicula = this.formGroup.value;
    console.log("Guardado: " + pelicula.nombre); //pelicula.nombre retorna undefined
    this.http.create(pelicula).subscribe((response)=> {
      console.log("Guardado: " + response.nombre);
    });
  }

}

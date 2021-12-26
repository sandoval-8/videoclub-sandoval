import {Clasificacion} from "../../../../videomania-sandoval/src/app/modelo/clasificacion";

export interface Pelicula {
  id:number,
  nombre:string,
  descripcion?:string,
  duracion?:number,
  url?:string,
  portada?:string,
  precio:number,
  calificacion?: number,
  clasificacion: Clasificacion
}

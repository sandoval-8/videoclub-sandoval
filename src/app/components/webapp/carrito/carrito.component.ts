import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Carrito } from 'src/app/modelo/carrito';
import { CarritoService } from 'src/app/service/http/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['ID', 'Nombre', 'Precio', 'Acción'];
  subcription:Subscription = new Subscription();
  carrito:Carrito[] = [];

  constructor(private carritoService:CarritoService) { }

  ngOnDestroy(): void {
    this.subcription.unsubscribe;
  }

  ngOnInit(): void {
    this.getCarrito();
  }

  private getCarrito(){
    this.subcription = this.carritoService.getCarrito().subscribe((carrito) => {
      console.log("carrito:" + JSON.stringify(carrito));
      this.carrito = carrito;
    });
  }

  eliminarCarrito(id:number){
    this.carritoService.deleteElement(id).subscribe(()=> {
      console.log("Elemento eliminado: " + id);
    });
  }

}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './carrito/carrito.component';
import { InfoComponent } from './info/info.component';
import {ListaComponent} from "./lista/lista.component";
import {WebappComponent} from "./webapp.component";

const routes: Routes = [
  { path:"", component:WebappComponent, children:[
      { path:"lista", component:ListaComponent },
      { path:"carrito", component:CarritoComponent },
      { path:"info/:id", component:InfoComponent },
      { path:"", redirectTo:"lista", pathMatch:"full" }
    ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebappRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebappRoutingModule } from './webapp-routing.module';
import { ListaComponent } from './lista/lista.component';
import { WebappComponent } from './webapp.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InfoComponent } from './info/info.component';
import { CarritoComponent } from './carrito/carrito.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    ListaComponent,
    WebappComponent,
    NavbarComponent,
    InfoComponent,
    CarritoComponent
  ],
  imports: [
    CommonModule,
    WebappRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule
  ]
})
export class WebappModule { }

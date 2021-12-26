import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './forms.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  { path:"", component:FormsComponent, children:[
    { path:"login", component:LoginComponent },
    { path:"registro", component:RegistroComponent },
    { path:"", redirectTo:"lista", pathMatch:"full" }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }

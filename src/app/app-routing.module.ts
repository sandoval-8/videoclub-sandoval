import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'dashboard', loadChildren:()=> import("./components/dashboard/dashboard.module")
      .then(modulo => modulo.DashboardModule) },
  { path:'webapp', loadChildren:()=> import("./components/webapp/webapp.module")
      .then(modulo => modulo.WebappModule) },
  { path:'form', loadChildren:()=> import("./components/forms/forms.module")
      .then(modulo => modulo.FormsModule) },
  { path:'**', redirectTo:'form/login', pathMatch:'full' },
  { path: '', redirectTo:'form/login', pathMatch:'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

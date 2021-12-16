import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { PermisosComponent } from './components/permisos/permisos.component';
import { GruposComponent } from './components/grupos/grupos.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "usuarios", component: UsuariosComponent},
  {path: "permisos", component: PermisosComponent},
  {path: "grupos", component: GruposComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

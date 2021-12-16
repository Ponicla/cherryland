import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedService } from './services/shared.service';
import { ApiService } from './services/api.service';
import { LoginService } from './services/login.service';
import { LocalstorageService } from './services/localstorage.service';

import { DataTablesModule } from "angular-datatables";

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DashComponent } from './components/dash/dash.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { PermisosComponent } from './components/permisos/permisos.component';
import { GruposComponent } from './components/grupos/grupos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashComponent,
    NavbarComponent,
    UsuariosComponent,
    PermisosComponent,
    GruposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [
    ApiService,
    SharedService,
    LoginService,
    LocalstorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

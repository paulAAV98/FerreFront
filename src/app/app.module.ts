import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Sucursal/listar/listar.component';
import { ListarProComponent } from './Producto/listar-pro/listar-pro.component';

import {FormsModule} from '@angular/forms';
import { ServiceService }from '../app/Service/service.service';
import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component'

import { ReactiveFormsModule } from '@angular/forms';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TarjetaComponent } from './tarjeta/tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    ListarProComponent,
    NavbarComponent,
    InicioComponent,
    LoginComponent,
    TarjetaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

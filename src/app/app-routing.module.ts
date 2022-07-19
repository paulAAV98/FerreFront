import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarProComponent } from './Producto/listar-pro/listar-pro.component';
import { ListarComponent } from './Sucursal/listar/listar.component';
import { LoginComponent} from './login/login.component';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { NavbarComponent } from './navbar/navbar.component'
const routes: Routes = [
  {path:'listar',component:ListarComponent},
  {path:'login',component:LoginComponent},
 {path:'listarPro',component:ListarProComponent},
 {path:'tarjeta',component:TarjetaComponent},
 
 {path:'**',redirectTo:'/',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoxeadorInformacionComponent } from './boxeadores/boxeadores-informacion/boxeadores-informacion.component';
import { BoxeadoresListComponent } from './boxeadores/boxeadores-list/boxeadores-list.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './user/auth.guard';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { BoxeadorNuevoComponent } from './boxeadores/boxeador-nuevo/boxeador-nuevo.component';

const routes: Routes = [
{path: 'home', component: HomeComponent},
{path: 'acercaDe', component: AcercaDeComponent},
{path: 'nuevoBoxeador', canActivate: [AuthGuard] , component: BoxeadorNuevoComponent},
{path: 'boxeadores' , canActivate: [AuthGuard], component:BoxeadoresListComponent},
{path: 'login' , component:LoginComponent},
{path: 'boxeador/:id' , component:BoxeadorInformacionComponent},
{path: '**' , pathMatch:'full' , redirectTo : 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

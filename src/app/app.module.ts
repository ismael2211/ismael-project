import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BoxeadoresListComponent } from './boxeadores/boxeadores-list/boxeadores-list.component';
import { BoxeadoresItemComponent } from './boxeadores/boxeadores-item/boxeadores-item.component';
import { HomeComponent } from './components/home/home.component';
import { BoxeadoresService } from './boxeadores/boxeadores.service';
import {HttpClientModule} from "@angular/common/http";
import { BoxeadorInformacionComponent } from './boxeadores/boxeadores-informacion/boxeadores-informacion.component';
import { FiltrarBoxeadorPipe } from './boxeadores/filtrar-boxeador.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { MostrarMesDirective } from './directives/mostrar-mes.directive';
import { ForDelayDirective } from './directives/for-delay.directive';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { BoxeadorNuevoComponent } from './boxeadores/boxeador-nuevo/boxeador-nuevo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BoxeadoresListComponent,
    BoxeadoresItemComponent,
    HomeComponent,
    BoxeadorInformacionComponent,
    FiltrarBoxeadorPipe,
    LoginComponent,
    MostrarMesDirective,
    ForDelayDirective,
    AcercaDeComponent,
    BoxeadorNuevoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [BoxeadoresService],
  bootstrap: [AppComponent]
})
export class AppModule { }

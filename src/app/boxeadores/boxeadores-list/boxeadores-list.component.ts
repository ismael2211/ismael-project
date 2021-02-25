import { Component, OnInit } from '@angular/core';
import { Boxeador } from '../boxeador';
import { BoxeadoresService } from '../boxeadores.service';

@Component({
  selector: 'app-boxeadores-list',
  templateUrl: './boxeadores-list.component.html'
})
export class BoxeadoresListComponent implements OnInit {
  [x: string]: any;
  boxeadores: Boxeador[] = [
    { id: '1', edad: 50, nombre: "Mike Tyson", nacionalidad: "" , descripcion: "" , cinturones:[] },
    { id: '2 ', edad: 46, nombre: "Manny Pacquiao", nacionalidad: "" , descripcion:"" , cinturones:[] },
    { id: '3 ', edad: 22, nombre: "Ryan Garcia", nacionalidad: "" , descripcion:""  , cinturones:[]},
    { id: '4 ', edad: 34, nombre: "Floyd Mayweather", nacionalidad: "" , descripcion:"" , cinturones:[] }
  ];

  buscar: string ='';
  constructor(private boxeadoresService: BoxeadoresService) { }

  ngOnInit(): void {
    this.boxeadoresService.getBoxeadores().subscribe(
      boxeadores => this.boxeadores = boxeadores
    )
  }

  mostrar:boolean = false;
  mensaje(){
    this.mostrar = true;
    setTimeout(() => {
      this.mostrar = false;
    }, 5000);
  }

}

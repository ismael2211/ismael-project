import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Boxeador } from '../boxeador';
import { BoxeadoresService } from '../boxeadores.service';

@Component({
  selector: 'app-boxeador-informacion',
  templateUrl: 'boxeadores-informacion.component.html',
  styleUrls: ['boxeadores-informacion.component.css']
})
export class BoxeadorInformacionComponent implements OnInit {
  boxeador!: Boxeador;
  constructor(private activatedRoute: ActivatedRoute, private boxeadoresService: BoxeadoresService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(b => {
      this.boxeadoresService.getBoxeador(b.id).subscribe(boxeador => this.boxeador = boxeador)
    })
  }

}

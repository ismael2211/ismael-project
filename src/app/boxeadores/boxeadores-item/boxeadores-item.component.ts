import { Component, OnInit, Input} from '@angular/core';
import { Boxeador } from '../boxeador';
import { Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-boxeadores-item',
  templateUrl: './boxeadores-item.component.html'
})
export class BoxeadoresItemComponent implements OnInit {
  @Input() boxeador!: Boxeador;
  constructor() { }

  ngOnInit(): void {
  }

  @Output() newItemEvent = new EventEmitter<string>();
  mostrarMensajeInfo() {
    this.newItemEvent.emit("Hola");
  }

}
